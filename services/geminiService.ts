
import { GoogleGenAI } from "@google/genai";
import { SearchResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const searchSports = async (query: string): Promise<SearchResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Search for live and upcoming sports events globally for the following query: "${query}". 
      Format the response as a clear, exciting summary of what's happening right now or soon. 
      Identify specific match times, venues, and competition names.`,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
    });

    const summary = response.text || "No results found.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      summary,
      sources,
    };
  } catch (error) {
    console.error("Gemini Search Error:", error);
    throw error;
  }
};
