import { createContext } from "react";

const StoryContext = createContext({
  loading: false,
  setLoading: () => {},
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
