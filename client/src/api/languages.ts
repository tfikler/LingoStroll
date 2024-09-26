import axios from 'axios';


export const getDataForLanguageAndRank = async (language, rank, invalidLocations=undefined) => {
    const response = await axios.get(`http://localhost:3000/api/locations?language=${language}&rank=${rank}`);
    const locationName = response.data.name;
    if (invalidLocations === undefined) {
        return response.data;
    }
    if (invalidLocations.includes(locationName)) {
        return await getDataForLanguageAndRank(language, rank, invalidLocations);
    }
    return response.data;
}

export const updateUsedQuestions = async (data) => {
    await axios.post('http://localhost:3000/api/locations/used-questions', data);
};