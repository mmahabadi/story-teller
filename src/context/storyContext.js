import { createContext } from "react";

const StoryContext = createContext({
  story: {
    subject: "",
    characters: [],
    body: "",
    endings: [],
    laoding: false,
    history: [],
  },
  setStory: () => {},
});

export default StoryContext;
