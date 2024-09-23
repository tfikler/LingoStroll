import React, {useState, useEffect, useContext} from 'react';
import { Loading } from '../Loading/index.tsx';
import './americanQuestion.css';
import {SelectionContext} from "../Context";


export const AmericanQuestions = () => {
    const { selections, updateSelection } = useContext(SelectionContext);
    const [isLoading, setIsLoading] = useState(false);
    const [quizContent, setQuizContent] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
    const [resultMessage, setResultMessage] = useState('');

    // Fetch the questions from the API
    const fetchQuestions = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/openai/american-questions');
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
    }, []);

    const handleAnswerClick = (answer, correctAnswer) => {
        setIsQuestionAnswered(true);
        const isCorrect = answer === correctAnswer;
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setResultMessage(isCorrect ? 'Correct Answer!' : 'Wrong Answer!');
    };

    const handleNextQuestion = () => {
        setIsQuestionAnswered(false);
        setResultMessage('');
        if (currentQuestionIndex < quizContent.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsModalVisible(false);
        }
    };

    const handleExit = () => {
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
                    {currentQuestionIndex < quizContent.questions.length ? (
                        <div>
                            <div className="question">
                                {quizContent.questions[currentQuestionIndex].question}
                            </div>
                            {quizContent.questions[currentQuestionIndex].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    className="answerButton"
                                    onClick={() =>
                                        handleAnswerClick(
                                            answer,
                                            quizContent.questions[currentQuestionIndex].correct_answer
                                        )
                                    }
                                    disabled={isQuestionAnswered}
                                >
                                    {answer}
                                </button>
                            ))}
                            {isQuestionAnswered && (
                                <div className={`resultMessage ${resultMessage === 'Wrong Answer!' ? 'wrong' : ''}`}>
                                    {resultMessage}
                                </div>
                            )}
                            {isQuestionAnswered && (
                                <button onClick={handleNextQuestion}>Next</button>
                            )}
                        </div>
                    ) : (
                        <div>
                            Quiz Completed! <br />
                            You made {correctAnswers} correct answers.
                        </div>
                    )}
                </div>
            )}
        </>
    );
};