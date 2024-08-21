import axios from 'axios';


export const getDataForLanguageAndRank = async (language, rank) => {
    const response = await axios.get(`/api/locations/${language}/${rank}`);
    return response.data;
}

