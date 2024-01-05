import React from "react";
import Characters from "./characters";
import Subject from "./subject";
import StoryBody from "./storyBody";
// import StoryContext from "../../context/storyContext";
// import { useContext } from "react";
// import { LoadingOverlay } from "react-loading-overlay";
const WholeStory = () => {
  //const { story } = useContext(StoryContext);
  return (
    <div>
      {/* <LoadingOverlay active={story.loading} spinner> */}
      <Subject></Subject>
      <Characters></Characters>
      <StoryBody></StoryBody>
      {/* </LoadingOverlay> */}
    </div>
  );
};

export default WholeStory;
