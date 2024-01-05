import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import StoryContext from "../../context/storyContext";
import { useContext } from "react";
import { storyTeller } from "../../utils/chatGPT/storyTeller";
import { PromptType } from "../../utils/chatGPT/constants";

const Subject = () => {
  const { story, setStory } = useContext(StoryContext);
  const [title, setTitle] = useState("");

  return (
    <div className="flex p-10">
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <GoArrowRight className="text-purple-400"></GoArrowRight>
        </div>
        <input
          type="text"
          id="default-search"
          className="block p-4 pl-10 w-full text-xl  text-grey-800 dark:text-grey-200 bg-grey-200 dark:bg-grey-800 rounded-lg  focus:ring-grey-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
          placeholder="Choose a title for your story"
          onChange={(e) => {
            setTitle(e.target.value);
            setStory({ ...story, subject: e.target.value });
          }}
          value={title}
        />
      </div>
      <button
        className="w-96 rounded-lg  ml-2 pl-10 pr-10rounded-lg bg-amber-500 text-white font-semibold px-4 py-2  hover:bg-amber-600 transition duration-300 ease-in-out"
        onClick={async (e) => {
          setStory({ ...story, loading: true });
          console.log(story);
          let updatedStory = await storyTeller(
            PromptType.STORY_CHARACTERS_PROMPT,
            story
          );
          //console.log(characters);
          setStory({ ...updatedStory, loading: false });
        }}
      >
        Let's Go
      </button>
    </div>
  );
};

export default Subject;
