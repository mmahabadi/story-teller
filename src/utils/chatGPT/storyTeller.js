import { PromptType, Prompts } from "./constants";
import { ChatGPTResponse } from "./askChatGPT";

export const storyTeller = async (promptType, story) => {
  let prompt = Prompts[promptType].replaceAll("{0}", story.subject);
  let messages = story?.history ?? [];
  messages.push({ role: "user", content: prompt });

  const response = await ChatGPTResponse(messages);
  let updatedStory = { ...story, history: messages };
  if (response) {
    const result = JSON.parse(response);
    console.log("json-result", result);
    if (promptType === PromptType.STORY_CHARACTERS_PROMPT) {
      updatedStory.characters = result;
    } else if (promptType === promptType.STORY_OBJECT_PROMPT) {
      updatedStory.endings.push(result.endings);
      updatedStory.body += " " + result.body;
    }

    updatedStory.history.push({
      role: "assistant",
      content: result.body ?? JSON.stringify(result),
    });

    console.log("updatedStory", updatedStory);
    return updatedStory;
  } else {
    return null;
  }
};
