import StoryContext from "../../context/storyContext";
import { useContext } from "react";
import { storyTeller } from "../../utils/chatGPT/storyTeller";
import { PromptType } from "../../utils/chatGPT/constants";
const Characters = () => {
  //Todo: add charachter customazation here=>> give a description of the character from kid and add to character list
  const { story, setStory, setLoading } = useContext(StoryContext);

  const charIsSelected = (char) => {
    return story?.characters.find((x) => x.name === char).selected;
  };

  return (
    <div className="pr-10 pl-10">
      {story?.characters?.length > 0 && (
        <div>
          <div className="flex flex-row content-stretch">
            {story?.characters?.map((char, index) => {
              return (
                <div
                  key={index}
                  className={`p-10 m-1 rounded ${
                    charIsSelected(char.name)
                      ? "bg-orange-600 text-white"
                      : "bg-orange-300 text-cyan-950"
                  } ${
                    charIsSelected(char.name) ? "text-white" : "text-blue-900"
                  }`}
                  onClick={() => {
                    story.characters.find(
                      (x) => x.name === char.name
                    ).selected = !story.characters.find(
                      (x) => x.name === char.name
                    ).selected;
                    setStory({ ...story, characters: story.characters });
                  }}
                >
                  <p>
                    {`a ${char.category} called `}
                    <span className="font-semibold">{char.name}</span>
                  </p>
                  <p className="text-red-900 font-semibold">
                    {char.age} years old
                  </p>
                  <p>
                    known for being{" "}
                    <span className="font-semibold">{char.personality}</span>
                  </p>
                  <p>more to know: {char.description}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row content-between space-x-2">
            <button
              className="w-full mt-10 h-16 p-5 rounded-lg bg-amber-500 text-white font-semibold px-4 py-2  hover:bg-amber-600 transition duration-300 ease-in-out"
              onClick={async () => {
                console.log(story);
                setLoading(true);
                let updatedStory = await storyTeller(
                  PromptType.STORY_OBJECT_PROMPT,
                  story
                );
                setStory({ ...updatedStory });
                setLoading(false);
              }}
            >
              I love these characters
            </button>
            <button
              className="w-full mt-10 h-16 p-5 rounded-lg bg-green-800   text-white font-semibold px-4 py-2  hover:bg-green-600 transition duration-300 ease-in-out"
              onClick={() => {}}
            >
              I want to add my own characters
            </button>
          </div>
          {/* <div>
        <input value={} placeholder="Add your Character here" />
        <button
          onClick={() => {
            setStory({ ...story, characters: { ...story.characters } });
          }}
        >
          {" "}
          Add it!
        </button>
      </div> */}
        </div>
      )}
    </div>
  );
};

export default Characters;
