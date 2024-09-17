import {Request, Response} from "express";

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

        // const landmark: LandmarkConfig = gameService.getCheckpoint(language, rank);
        const landmark = {
            name: "Eiffel Tower",
            location: "Paris",
            prompt: "What would you like to talk about?"
        };
        const prompt = `You are at ${landmark.name} in ${landmark.location}. ${landmark.prompt}`;

        // const openaiResponse = await openai.createCompletion({
        //     model: "gpt-4",
        //     prompt: prompt,
        //     max_tokens: 300,
        // });

        // const conversation = openaiResponse.data.choices[0].text?.trim();

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
