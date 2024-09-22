import { MongoClient, ServerApiVersion, Collection, Db } from 'mongodb';
import dotenv from 'dotenv';

const TOMER_DATABASE_URI = dotenv.config().parsed?.TOMER_DATABASE_URI

export interface User {
    name: string;
    password: string;
}

class MongoService {
    private uri: string | undefined;
    private client: MongoClient;
    private db: Db;
    private collection: Collection;

    constructor() {
        this.uri = TOMER_DATABASE_URI;
        if (!this.uri) {
            throw new Error("Database URI is missing - check it with tomer");
        }
        this.client = new MongoClient(this.uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        this.db = this.client.db("Lingo");
        this.collection = this.db.collection("Users");
    }

    // Connect to MongoDB
    async connect(): Promise<void> {
        try {
            await this.client.connect();
            console.log("Successfully connected to MongoDB");
        } catch (err) {
            console.error("Failed to connect to MongoDB", err);
            throw err;
        }
    }

    async insertUser(user: User): Promise<string> {
        const result = await this.collection.insertOne(user);
        console.log(`New user created with the following id: ${result.insertedId}`);
        return result.insertedId.toString();
    }

    async getUser(name: string) {
        const user = await this.collection.findOne({ name });
        console.log(user)
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    // Close the client connection
    async closeConnection(): Promise<void> {
        await this.client.close();
        console.log("MongoDB connection closed");
    }
}

export default MongoService;
