import axios from 'axios';
export const increaseUserScore = async (user, language, score) => {
    await axios.post('http://localhost:3000/db/increase-score', {
        name: user,
        language,
        score
    });
}