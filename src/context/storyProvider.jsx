import React, { useState } from "react";
import StoryContext from "./storyContext";

export const StoryProvider = ({ children }) => {
  const [story, setStory] = useState(null);

  return (
    <StoryContext.Provider value={{ story, setStory }}>
      {children}
    </StoryContext.Provider>
  );
};
