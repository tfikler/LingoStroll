import express, { Application, Request, Response } from 'express';
import locationRoutes from './routes/locationRoutes';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Register routes
app.use('/api/locations', locationRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


