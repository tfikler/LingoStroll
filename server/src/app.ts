import express, { Application, Request, Response } from 'express';
import locationRoutes from './routes/locationRoutes';
import openaiRoutes from './routes/openaiRoutes';
import dbRoutes from './routes/dbRoutes';
import ttsRoutes from './routes/ttsRoutes';
import cors from 'cors';
import {UserDataConfig} from "./flow-config/user-config";
import MongoService from "./libs/db";



export const userData = new UserDataConfig();
export const mongoService = new MongoService();


const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/locations', locationRoutes);
app.use('/api/openai', openaiRoutes);
app.use('/db', dbRoutes);
app.use('/api/tts', ttsRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


