import {FlowConfig, LandmarkConfig} from '../flow-config/configurations';

const flowConfig = new FlowConfig();
function getRank(rankKey: number): string {
         return flowConfig.getRank(rankKey);
}
function getRandomItem<T>(items: T[]): T {
         return items[Math.floor(Math.random() * items.length)];
}

function getCheckpoint(language: string, rank: number): LandmarkConfig {
    const languageConfig = flowConfig.getLanguage(language);
    if (!languageConfig) {
        throw new Error("Language not found.");
    }

    // Randomly select a country
    const country = getRandomItem(languageConfig.countries);

    // Randomly select a city
    const city = getRandomItem(country.cities);

    // Filter landmarks by rank
    const landmarksByRank = city.landmarks.filter(landmark => landmark.rank === rank);
    if (landmarksByRank.length === 0) {
        throw new Error("No landmarks found for the specified rank.");
    }

    // Randomly select a landmark from the filtered list
    return getRandomItem(landmarksByRank);
}

export {getCheckpoint, getRank, getRandomItem};