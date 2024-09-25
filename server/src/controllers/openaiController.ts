import {Request, Response} from "express";
import {openaiClient} from "../libs/openai";
import { userData} from "../app";

const jsonFormatForQuiz = {
    questions: [
        {
            question: 'What is the capital of France?',
            answers: ['Paris', 'London', 'Berlin', 'Madrid'],
            correct_answer: 'Paris'
        },
        {
            question: 'What is the capital of Germany?',
            answers: ['Paris', 'London', 'Berlin', 'Madrid'],
            correct_answer: 'Berlin'
        }
    ]
}
const stringifierJsonFormatForQuiz = JSON.stringify(jsonFormatForQuiz);


export const getQuestions = async (req: Request, res: Response) => {
    const systemPrompt = `
You are a ${userData.getLanguage()} tutor, currently located in ${userData.getCity()}, ${userData.getCountry()}. You are at the landmark ${JSON.stringify(userData.getLandmark())}. 
Your task is to create a vocabulary quiz for your students that is focused on ${userData.getLanguage()} words related to ${JSON.stringify(userData.getLandmark())}. 
For example, you might ask, "How do you say 'cathedral' in ${userData.getLanguage()}?" if the landmark is a cathedral.
`;

    const systemRule = `
Write a quiz with 8 vocabulary questions. Each question should be multiple-choice with 4 options, where only 1 answer is correct. 
Make sure the correct answer is randomly placed among the 4 options, and indicate which one is correct. 
The vocabulary should be related to ${JSON.stringify(userData.getLandmark())} and its surroundings (e.g., famous objects, buildings, or features at the location).
Output the quiz in the following JSON format: ${stringifierJsonFormatForQuiz}.
The quiz should be at level ${userData.getRank() == 1 ? 'easy' : userData.getRank() == 2 ? 'medium' : 'hard'} for students who are learning ${userData.getLanguage()}.
The Questions must be in english.
The quiz should be all regarding to help learn the ${userData.getLanguage()} vocabulary!
Don't ask questions regarding the location itself, only the vocabulary.
Use various type of questions like what is the word for, what is the meaning of, etc.
Don't ask questions that you have already asked in previous quizzes - this are all the questions you have asked before: ${JSON.stringify(userData.getUsedQuestions())}.
`;

    const combinedPrompt = `${systemPrompt} Follow these rules: ${systemRule}`;
    console.log(combinedPrompt)
    try {
        const openaiResponse = await openaiClient.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{role: "system", content: combinedPrompt}],
        });
        return await res.json(openaiResponse.choices[0].message.content);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching questions.");
    }
};

export const practiceLanguage = async (req: Request, res: Response) => {
    const { language, rank } = req.body;

    if (!language || !rank) {
        return res.status(400).send("Language and rank are required.");
    }

    try {
        // Retrieve gameService from session
        // const gameService = req.session.gameService;

        // if (!gameService) {
        //     return res.status(500).send("Game service not initialized.");
        // }

        // const landmark: LandmarkConfig = getCheckpoint(language, rank);
        const landmark = {
            name: "Eiffel Tower",
            location: "Paris",
            prompt: "What would you like to talk about?"
        };
        // const userLanguageChosen = userData.getLanguage();
        // const userRank = userData.getRank();

        const prompt = `You are at ${landmark.name} in ${landmark.location}. ${landmark.prompt}`;
        console.log(userData)

        const openaiResponse = await openaiClient.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "system", content: prompt}],
        })

        console.log(openaiResponse.choices[0].message);
        res.json({
            language,
            rank: rank,
            landmark: landmark.name,
            conversation: openaiResponse.choices[0].message,
        });

        // res.json({
        //     language,
        //     rank: gameService.getRank(rank),
        //     landmark: landmark.name,
        //     conversation,
        // });
    } catch (error) {
        console.error("Error generating conversation:", error);
        res.status(500).send("Error generating conversation.");
    }
};

export const chat = async (req: Request, res: Response) => {
    const { messages, language } = req.body;

    if (!messages || !language) {
        return res.status(400).send("Messages and language are required.");
    }

    // try {
    //     const conversationHistory = messages.map(msg => ({
    //         role: msg.sender === 'user' ? 'user' : 'assistant',
    //         content: msg.text,
    //     }));
    //
    //     const openaiResponse = await openai.createChatCompletion({
    //         model: "gpt-4",
    //         messages: conversationHistory,
    //     });
    //
    //     const reply = openaiResponse.data.choices[0].message?.content.trim();
    //
    //     res.json({ reply });
    // } catch (error) {
    //     console.error('Error in /chat:', error);
    //     res.status(500).send("Error generating response.");
    // }
};
