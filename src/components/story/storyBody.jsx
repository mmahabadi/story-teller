import StoryContext from "../../context/storyContext";
import { useContext, useEffect, useState } from "react";
import { fetchSpeechAudio } from "../../utils/chatGPT/askChatGPT.js";

const StoryBody = () => {
  const { story, setStory, setLoading } = useContext(StoryContext);
  
  const [audio, setAudio] = useState(null);


  const playAudio = async() => {
  
    setLoading(true);
    const audio = await fetchSpeechAudio(story.body);
    setAudio(audio);
    setLoading(false);
    console.log("my audio",audio);
    
  }
  useEffect(() => {
    if (story?.body) {
      playAudio();
    }
  }, [story?.body]);


  return (
    <>
      <div className="p-10">
        {story?.body && (
          <div className="text-grey-800 dark:text-grey-200">
            <p
              className="p-5 mt-5 rounded-lg bg-white"
            >
              {story?.body}
            </p>
          <br></br>
            {audio &&
             <audio id="audioBlob" src={audio} controls type="audio/mp3" autoplay="true" />
             }

            {story?.endings && story?.endings?.length > 0 && (
              <>
                <hr className="dark:text-grey-800 text-grey-200 mt-10"></hr>
                <p className="text-grey-400 mt-5">endings:</p>

                <div className="pl-5 flex flex-wrap">
                  {story?.endings?.map((topic, i) => {
                    return (
                      <div
                        key={i}
                        className="whitespace-nowrap mt-4 flex-wrap dark:text-grey-200 text-grey-800 hover:text-purple-400 dark:hover:text-purple-400 border border-grey-400 px-3 mr-3 rounded-xl"
                        onClick={() => {
                          setStory(null);
                        }}
                      >
                        {topic}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default StoryBody;
