import axios from "axios";

const API_KEY = "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";

export const ChatGPTResponse = async (messages) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages,
        temperature: 1,
        // max_tokens: 20,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    console.log("response", response);
    // Extract and update the chat history with the model's reply
    const reply = response.data.choices[0].message.content;
    return reply;
  } catch (error) {
    console.error("Error calling ChatGPT API:", error);
  }
};

export const fetchSpeechAudio = async (input) => {
  const postData = {
    model: "tts-1",
    input,
    voice: "nova",
  };
  
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/audio/speech",
      postData,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        responseType: "blob",
      }
    );
    console.log("audio", response);
    const audioBlob = new Blob([response.data], { type: "audio/mp3" });
    return URL.createObjectURL(audioBlob);
  } catch (error) {
    console.error("Error fetching speech audio:", error);
  }
};
