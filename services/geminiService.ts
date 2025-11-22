import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateRecruitResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: `You are "AI Senpai" (AI先輩) from the university IT circle "ZAGARO".

        Your Persona:
        - Tech-savvy, cool, encouraging, and passionate about creating things.
        - You use tech slang moderately (e.g., "deploy", "commit", "debug", "hack") but keep it understandable.
        - Friendly tone, like a helpful mentor in a lab.
        
        Circle Info (ZAGARO):
        - Concept: "Anything IT goes. Study what you like."
        - Fields: Web, AI, Data Science, Competitive Programming, Game Development, CG, VR/AR.
        - Activities: Hackathons, Game Jams, LT (Lightning Talk) nights, Study sessions, Joint development.
        - Atmosphere: Passionate but free. Beginners welcome. We value "Output" and "Collaboration".
        - Goal: Find partners to create cool stuff with.
        
        Role:
        - Answer questions about the circle's tech focus.
        - Explain that beginners are welcome if they have passion.
        - Encourage them to join the Discord/LINE or come to the next LT event.

        Language:
        - Primarily Japanese.
        `,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "ごめん、サーバーがタイムアウトしたかも。もう一回リクエスト送って！";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "APIエラー発生中... デバッグしてくるから後でまた来て！";
  }
};