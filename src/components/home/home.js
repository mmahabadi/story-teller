import { useState, useEffect } from "react";
import WholeStory from "../story/wholeStory";
import StoryContext from "../../context/storyContext";
import { useContext } from "react";

function Home() {
  const [started, setStarted] = useState(false);
  const { setStory } = useContext(StoryContext);

  useEffect(() => {
    setStory({
      subject: "",
      characters: [],
      body: "",
      endings: [],
      history: [],
    });
  }, []);

  return (
    <div className=" w-full flex flex-wrap justify-between py-3 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="w-full items-center">
        {!started && (
          <div className="flex flex-col w-full h-full items-center justify-center">
            <span className="self-center  text-white font-semibold whitespace-nowrap">
              Ok! Let's build a stroy together!
            </span>
            <button
              className="w-96 p-5  rounded-lg bg-amber-500 text-white font-semibold  mt-4 hover:bg-amber-600 transition duration-300 ease-in-out"
              onClick={() => {
                setStarted(true);
              }}
            >
              Start!
            </button>
          </div>
        )}

        {started && <WholeStory></WholeStory>}
      </div>
    </div>
  );
}

export default Home;
