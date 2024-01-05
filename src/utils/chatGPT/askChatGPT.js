import { PromptType, Prompts } from "./constants";
import axios from "axios";

const CHATGPT_API_KEY = "8e7aa471904840359e1d01e31e555318";

export const ChatGPTResponse = async (messages) => {
  try {
    const response = await axios.post(
      "https://iogpt-api-management-service.azure-api.net/openai/api/proxy/openai/chat/completions",
      {
        model: "gpt-35-turbo",
        messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "iO-GPT-Subscription-Key": CHATGPT_API_KEY,
        },
      }
    );

    console.log("ChatGPTResponse", response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(`chatGPT failed to generate response `, error);
    return "";
  }
};
