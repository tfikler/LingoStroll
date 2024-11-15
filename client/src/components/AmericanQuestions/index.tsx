import React, { useState, useEffect, useContext } from 'react';
import { Loading } from '../Loading/index.tsx';
import './americanQuestion.css';
import { SelectionContext, UserContext } from '../Context';
import {updateUsedQuestions} from "../../api/languages.ts";
import {increaseUserScore} from "../../api/db.ts";
import {logEvent} from "../../ga4.js";

export const AmericanQuestions = () => {
    const { selections, updateSelection } = useContext(SelectionContext);
    const { user } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [quizContent, setQuizContent] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [resultMessage, setResultMessage] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showEnglishSentence, setShowEnglishSentence] = useState(false);

    // Fetch the questions from the API
    const fetchQuestions = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                'http://localhost:3000/api/openai/american-questions'
            );
            const data = await response.json();
            const data1 = JSON.parse(data);
            setQuizContent(data1);
            setIsModalVisible(true);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (quizContent) {
            // Simulate a delay before showing the first question
            const delayBeforeStart = setTimeout(() => {
                setCurrentQuestionIndex(0);
            }, 2000);
            return () => clearTimeout(delayBeforeStart);
        }
    }, [quizContent]);

    useEffect(() => {
        fetchQuestions();
        handleFirstTimeWord();
    }, []);

    const handleAnswerClick = (answer, correctAnswer) => {
        setIsQuestionAnswered(true);
        setSelectedAnswer(answer);
        const isCorrect = answer === correctAnswer;
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setResultMessage(isCorrect ? 'Correct Answer!' : 'Wrong Answer!');
    };

    const handleNextQuestion = () => {
        setIsQuestionAnswered(false);
        setShowEnglishSentence(false);
        setSelectedAnswer(null);
        setResultMessage('');
        if (currentQuestionIndex < quizContent.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            if (correctAnswers >= 1) {
                logEvent('quiz', 'User passed the quiz!')
                const currentLevel = selections.currentLevel;
                const newLevel = currentLevel + 1;
                updateSelection('currentLevel', newLevel);
                const scoreEarn = selections.currentLevel * selections.rank * correctAnswers;
                increaseUserScore(user.name, selections.language, scoreEarn);
            }
            logEvent('quiz', 'User completed the quiz! - but did not pass')
            setIsQuizCompleted(true);
            updateUsedQuestions(quizContent);
        }
    };

    const handleFirstTimeWord = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/tts/speak-word', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: 'a' })
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
        } catch (error) {
            console.error(error);
        }
    }

    const handleHearWord = async () => {
        logEvent('quiz', 'User clicked on hear word in a sentence');
        setShowEnglishSentence(true);
        const word = quizContent.questions[currentQuestionIndex].speak_props[1];
        try {
            const response = await fetch('http://localhost:3000/api/tts/speak-word', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: word })
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const audio = new Audio(url);
            audio.play();
        } catch (error) {
            console.error(error);
        }
    };

    const handleExit = () => {
        logEvent('quiz', 'User exited the quiz')
        setIsModalVisible(false);
        updateSelection('conversationOn', false);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            {isModalVisible && (
                <div id="quizModal">
                    <button id="exitButton" onClick={handleExit}>
                        Exit
                    </button>
                    {!isQuizCompleted ? (
                        <div>
                            <div className="question">
                                {quizContent.questions[currentQuestionIndex].question}
                            </div>
                            {showEnglishSentence ?
                                <div>
                                    English: {quizContent.questions[currentQuestionIndex].speak_props[0]}
                                    <br/>
                                    {selections.language}: {quizContent.questions[currentQuestionIndex].speak_props[1]}
                                </div>
                                : quizContent.questions[currentQuestionIndex].answers.map(
                                (answer, index) => {
                                    let buttonClass = 'answerButton';
                                    if (isQuestionAnswered) {
                                        if (
                                            answer ===
                                            quizContent.questions[currentQuestionIndex].correct_answer
                                        ) {
                                            buttonClass += ' correctAnswer';
                                        } else if (answer === selectedAnswer) {
                                            buttonClass += ' incorrectAnswer';
                                        }
                                    }
                                    return (
                                        <button
                                            key={index}
                                            className={buttonClass}
                                            onClick={() =>
                                                handleAnswerClick(
                                                    answer,
                                                    quizContent.questions[currentQuestionIndex]
                                                        .correct_answer
                                                )
                                            }
                                            disabled={isQuestionAnswered}
                                        >
                                            {answer}
                                        </button>
                                    );
                                }
                            )}
                            {isQuestionAnswered && !showEnglishSentence && (
                                <div
                                    className={`resultMessage ${
                                        resultMessage === 'Wrong Answer!' ? 'wrong' : ''
                                    }`}
                                >
                                    {resultMessage}
                                </div>
                            )}
                            {isQuestionAnswered && (
                                <div>
                                    <button onClick={handleHearWord}>Hear the word in a sentence!</button>
                                    <br/>
                                    <button onClick={handleNextQuestion}>Next</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            Quiz Completed! <br />
                            You made {correctAnswers} correct answers.
                            <br />
                            {correctAnswers >= 6 ? (
                                <div>
                                    Congratulations! You passed the quiz - find the next landmark!
                                </div>
                            ) : (
                                <div>Sorry, you failed the quiz - retry.</div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
