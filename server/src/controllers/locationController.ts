import { Request, Response } from 'express';
import { getCheckpoint} from "../service/gameService";
import { userData} from "../app";

// Controller function to fetch data based on language and rank
export const getDataForLanguageAndRank = async (req: Request, res: Response) => {
    const { language, rank } = req.query;
    try {
        // Make an HTTP request to an external API or your own API
        console.log(language, rank)
        const response = getCheckpoint(language as string, parseInt(rank as string));
        console.log(response)
        return res.status(200).json(response);
    } catch (error: any) {
        console.error(`Error fetching data: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

export const updateUserWithUsedQuestions = async (req: Request, res: Response) => {
    const data = req.body;
    const questionsArray: string[] = [];

    data.questions.forEach((item: any) => {
            questionsArray.push(item.question);
    });

    userData.setUsedQuestions(questionsArray);
    res.status(200).json({ message: 'Successfully updated user with used questions' });
};
