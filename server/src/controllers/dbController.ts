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

// export const getAllRecords = async (req: any, res: any) => {
//     try {
//         await mongoService.connect();
//         const users = await mongoService.getAllUsersRecords();
//         res.json(users);
//     } catch (error) {
//         console.error("Error getting users:", error);
//         res.status(500).send("Error getting users.");
//     }
//     finally {
//         await mongoService.closeConnection();
//     }
//
// }

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

