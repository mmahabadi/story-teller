export const PromptType = {
  STORY_CHARACTERS_PROMPT: "STORY_CHARACTERS_PROMPT",
  STORY_OBJECT_PROMPT: "STORY_OBJECT_PROMPT",
};

export const Prompts = {
  STORY_CHARACTERS_PROMPT:
    "I need a json array object containing suggested 2 characters of a story with the subject {0} including these properties: name: the firstname of the character, age: the age of the character, personality: a words to describe the type of personality of the character, category: a word between man,woman,boy,girl,kid , description: tell about the characters's reputation and life in maximum 10 words. do not write any explanations or comment. just return the array in json.",
  //todo: avazesh kon faghat body ro bede va possible lines
  STORY_OBJECT_PROMPT:
    // "I need a json object to tell a short story without an end about {0} with the characters you suggested including these properties: body:a detailed story body , endings: top 3 possible ways to end the story . do not write any explanations or comment. just return the object in json.",
    "I need a json object to tell a short story about {0} with the characters you suggested including these properties: body:a maximum 100 characters story body without special charachters, endings: top 3 possible ways to end the story. do not write any explanations or comment. just return the object in json with {story: {body: string, title: string, endings: string[]}} format.",
};
