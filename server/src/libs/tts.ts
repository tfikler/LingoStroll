import textToSpeech from "@google-cloud/text-to-speech";
import dotenv from "dotenv";

export const ttsClient = new textToSpeech.TextToSpeechClient({
    apiKey: dotenv.config().parsed?.GOOGLE_CLOUD_TOMER_API_KEY,
});