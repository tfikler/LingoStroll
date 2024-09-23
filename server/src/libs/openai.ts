// initilize openAI client
import OpenAI from 'openai';
import dotenv from 'dotenv';

// export const openaiClient = new OpenAI({
//     apiKey: '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'
// });

export const openaiClient = new OpenAI({
    apiKey: dotenv.config().parsed?.TOMER_OPENAI_KEY
})

