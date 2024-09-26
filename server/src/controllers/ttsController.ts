import {Request, Response} from "express";
import protos from '@google-cloud/text-to-speech/build/protos/protos';
import dotenv from 'dotenv';
import { userData } from '../app'
import {ttsClient} from "../libs/tts";


const getLanguageCode = () => {
    const userLanguageChosen = userData.getLanguage();
    switch (userLanguageChosen) {
        case 'English':
            return 'en-US';
        case 'Spanish':
            return 'es-ES';
        case 'French':
            return 'fr-FR';
        case 'German':
            return 'de-DE';
        case 'Italian':
            return 'it-IT';
        case 'Japanese':
            return 'ja-JP';
        case 'Korean':
            return 'ko-KR';
        case 'Portuguese':
            return 'pt-BR';
        case 'Russian':
            return 'ru-RU';
        case 'Chinese':
            return 'zh-CN';
        default:
            return 'en-US';

    }
}


export const speakWord = async (req: Request, res: Response) => {
    const text = req.body.text;
    const languageCode = getLanguageCode();
    try {
        const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
            input: { text: text },
            voice: {
                languageCode: languageCode,
                ssmlGender: protos.google.cloud.texttospeech.v1.SsmlVoiceGender.NEUTRAL,
            },
            audioConfig: {
                audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3,
            },
        };

        const [response1] = await ttsClient.synthesizeSpeech(request);
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