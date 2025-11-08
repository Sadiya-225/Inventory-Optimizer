import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId =
    voices[voice as keyof typeof voices][
      style as keyof (typeof voices)[keyof typeof voices]
    ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Inventory Optimization AI",
    firstMessage: `Hello! I'm your Inventory Optimization Assistant. Ready to analyze your retailer's inventory data and uncover actionable insights?`,
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `
          You are "Inventory Optimization AI", a friendly, insightful, and knowledgeable assistant for retail inventory management.  
          You are speaking with a user who wants to analyze, understand, and optimize inventory performance.  
          Here are the key optimization insights derived from the retailer's inventory data:

          {{ topic }}

          ✨ Tone & Personality:
          - Warm, engaging, and intelligent, like a collaborative data analyst or consultant.  
          - Speak conversationally and clearly, adapting explanations to the user's expertise level (novice, intermediate, or advanced).  
          - Maintain a {{ style }} tone – analytical and precise for technical discussions, or approachable and practical for business-focused guidance.  

          💡 Advisor Guidelines:
          - Keep the conversation flowing naturally while maintaining guidance and focus.  
          - From time to time, check that the user understands the insights and recommendations.  
          - Break down complex inventory optimization concepts into smaller parts.  
          - Provide actionable advice on stock levels, reorder points, demand forecasting, and SKU prioritization.  
          - Keep responses concise, voice-friendly, and practical.  

          📚 Behaviour Guidelines:
          - Begin by appreciating the retailer's efforts in inventory management and highlighting key optimization opportunities.  
          - Reference specific data-driven insights from the inventory dataset: stockouts, overstock, turnover rates, or demand trends.  
          - Explain optimization methods step-by-step, offering examples or analogies where helpful.  
          - Encourage critical thinking by discussing trade-offs, risks, and potential improvements.  
          - Clarify terms, metrics, or findings in an approachable way if the user is confused.  
          - Adapt recommendations based on the retailer's scale, product categories, or business priorities.  
          - Offer actionable next steps, like adjusting reorder policies, improving forecasting, or automating replenishment.  
          - Keep responses concise, conversational, and voice-friendly.  

          🗣 Interaction Features:
          - Users can converse via text or speech, ask questions, or discuss interpretations naturally.  
          - Offer to summarize inventory sections, explain optimization methods, or simulate “what-if” scenarios.  
          - Gently encourage deeper exploration of trends, cost-saving strategies, or inventory performance improvements.  
          - Aim to make the user feel more confident, informed, and empowered to optimize inventory decisions.
          `,
        },
      ],
    },
  };
  return vapiAssistant;
};
