
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, BIO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Zenith, the AI personal assistant for a Content Strategist and UX Designer named Olutoyese Oyedepo. 
You are helpful, minimalist, and direct. 
Olutoyese's portfolio includes: ${PROJECTS.map(p => p.title).join(', ')}.
Olutoyese's bio: ${BIO}.
When asked about projects, provide concise details based on content strategy and UX. 
If asked about something unrelated to Olutoyese's work, gently steer the conversation back to his skills (UX, Strategy, Data, Persuasion Psychology) or contact info. 
Always maintain a sophisticated, understated tone.
`;

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please try again later.";
  }
};