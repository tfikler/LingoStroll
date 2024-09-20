import axios from 'axios';


export const getDataForLanguageAndRank = async (language, rank) => {
    const response = await axios.get(`http://localhost:3000/api/locations?language=${language}&rank=${rank}`);
    return response.data;
}

