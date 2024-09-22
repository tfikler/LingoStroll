import {Request, Response} from "express";
import {openaiClient} from "../libs/openai";
import { userData} from "../app";

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
