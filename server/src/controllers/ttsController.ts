import {Request, Response} from "express";
import textToSpeech from '@google-cloud/text-to-speech';
import protos from '@google-cloud/text-to-speech/build/protos/protos';
import dotenv from 'dotenv';

// Creates a client
const client = new textToSpeech.TextToSpeechClient({
    apiKey: dotenv.config().parsed?.GOOGLE_CLOUD_TOMER_API_KEY,
});


export const speakWord = async (req: Request, res: Response) => {
    try {
        const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
            input: { text: 'hello my name is tomer and im the king of the world' },
            voice: {
                languageCode: 'en-US',
                ssmlGender: protos.google.cloud.texttospeech.v1.SsmlVoiceGender.NEUTRAL,
            },
            audioConfig: {
                audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3,
            },
        };

        const [response1] = await client.synthesizeSpeech(request);
        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Length': response1.audioContent?.length || 0,
        });
        res.send(response1.audioContent);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating speech');
    }

};

export const speakSentence = async (req: Request, res: Response) => {

};