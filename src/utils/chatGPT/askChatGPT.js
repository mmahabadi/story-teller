import { Configuration, OpenAIApi } from "openai";

export const ChatGPTResponse = async (messages) => {
  const configuration = new Configuration({
    apiKey: process.env.CHATGPT_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      n: 1,
      stream: false,
    });
    console.log("chatbox answer", completion);
    const response = completion.data.choices[0].message;

    return response?.content;
  } catch (error) {
    console.error(`chatGPT failed to generate response `, error);
    return "";
  }
};
