import { Request, Response } from 'express';
import { getCheckpoint} from "../service/gameService";

// Controller function to fetch data based on language and rank
export const getDataForLanguageAndRank = async (req: Request, res: Response) => {
    // console.log(req.params)
    // console.log(req)
    // const { language, rank } = req.params;
    const { language, rank } = req.query;
    try {
        // Make an HTTP request to an external API or your own API
        console.log(language, rank)
        const response = getCheckpoint(language as string, parseInt(rank as string));
        return res.status(200).json(response);
    } catch (error: any) {
        console.error(`Error fetching data: ${error.message}`);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
