import React, { useState } from "react";
import StoryContext from "./storyContext";

export const StoryProvider = ({ children }) => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <StoryContext.Provider value={{ story, setStory, loading, setLoading }}>
      {children}
    </StoryContext.Provider>
  );
};
