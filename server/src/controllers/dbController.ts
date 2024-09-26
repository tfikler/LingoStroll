import {mongoService} from "../app";

export const getUser = async (req: any, res: any) => {
    try {
        await mongoService.connect();
        const user = await mongoService.getUser('tomer');
        res.json(user);
    } catch (error) {
        console.error("Error getting user:", error);
        res.status(500).send("Error getting user.");
    }
    finally {
        await mongoService.closeConnection();
    }
}

export const getAllUsers = async (req: any, res: any) => {
    try {
        await mongoService.connect();
        const users = await mongoService.getAllUsersRecords();
        res.json(users);
    } catch (error) {
        console.error("Error getting users:", error);
        res.status(500).send("Error getting users.");
    }
    finally {
        await mongoService.closeConnection();
    }
}

export const increaseUserScore = async (req: any, res: any) => {
    const { name, language, score } = req.body;
    if (!name || !language) {
        return res.status(400).send("Name and language are required.");
    }

    try {
        await mongoService.connect();
        const user = await mongoService.getUser(name);
        if (!user) {
            return res.status(404).send("User not found.");
        }

        const updatedUser = await mongoService.increaseUserScore(name, language, score);
        res.json(updatedUser);
    } catch (error) {
        console.error("Error increasing user score:", error);
        res.status(500).send("Error increasing user score.");
    }
    finally {
        await mongoService.closeConnection();
    }
}

export const addUser = async (req: any, res: any) => {
    const { name, password } = req.body;
    console.log(req.body)



    if (!name || !password) {
        return res.status(400).send("Name and password are required.");
    }

    try {
        await mongoService.connect();
        const user = await mongoService.insertUser({name, password});
        res.json(user);
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Error adding user.");
    }
    finally {
        await mongoService.closeConnection();
    }

}

export const loginUserOrRegister = async (req: any, res: any) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).send("Name and password are required.");
    }

    try {
        await mongoService.connect();
        const validation = await mongoService.validateUser(name, password);
        
        if (validation.user) {
            res.status(200).send({ message: "Login successful", user: validation.user });
        } else {
            if (validation.message === "User does not exist.") {
                const newUser = await mongoService.insertUser({ name, password });
                res.status(201).send({ message: "User registered successfully", userId: newUser });
            } else {
                res.status(409).send({ message: validation.message });
            }
        }
    } catch (error) {
        console.error("Error in user validation:", error);
        res.status(500).send("Internal server error.");
    } finally {
        await mongoService.closeConnection();
    }
}




