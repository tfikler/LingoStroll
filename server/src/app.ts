import express, { Application, Request, Response } from 'express';
import locationRoutes from './routes/locationRoutes';
import openaiRoutes from './routes/openaiRoutes';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/locations', locationRoutes);
app.use('/api/openai', openaiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


