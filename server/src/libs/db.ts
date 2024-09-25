import { MongoClient, ServerApiVersion, Collection, Db } from 'mongodb';
import dotenv from 'dotenv';

const TOMER_DATABASE_URI = dotenv.config().parsed?.TOMER_DATABASE_URI

export interface User {
    name: string;
    password: string;
    Spanish_score: string,
    French_score: string,
    German_score: string,
    English_score: string

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

    async insertUser(user: any): Promise<string> {
        const userWithScores = {
            ...user,
            Spanish_score: "0",
            French_score: "0",
            German_score: "0",
            English_score: "0"
        }
        const result = await this.collection.insertOne(userWithScores);
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

    async increaseUserScore(name: string, language: string, points: number) {
        const user = await this.collection.findOne({ name })
        if (!user) {
            throw new Error("User not found");
        }
        let score = user[language + "_score"];
        score = (parseInt(score) + points).toString();
        const result = await this.collection.updateOne({ name }, { $set: { [language + "_score"]: score } });
        console.log(`User ${name} updated with score ${score} to language ${language}`);
        return result;
    }

    async validateUser(name: string, password: string): Promise<{ user: User | null, message: string }> {
        const user = await this.collection.findOne({ name }) as User | null;
        if (user) {
            if (user.password === password) {
                return { user, message: "User logged in successfully." };
            } else {
                return { user: null, message: "Username is taken, and password does not match." };
            }
        }
        return { user: null, message: "User does not exist." };
    }
    

    // Close the client connection
    async closeConnection(): Promise<void> {
        await this.client.close();
        console.log("MongoDB connection closed");
    }
    
}



export default MongoService;
