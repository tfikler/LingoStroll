import axios from 'axios';
export const increaseUserScore = async (user, language, score) => {
    await axios.post('http://localhost:3000/db/increase-score', {
        name: user,
        language,
        score
    });
}

export const getAllUsers = async () => {
    const response = await axios.get('http://localhost:3000/db/users');
    return response.data;
}