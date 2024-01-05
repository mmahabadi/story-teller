import StoryContext from "../../context/storyContext";
import { useContext } from "react";

const StoryBody = () => {
  const { story, setStory } = useContext(StoryContext);

  return (
    <>
      <div className="p-10">
        {story?.history && (
          <div className="text-grey-800 dark:text-grey-200">
            {story?.body &&
              story?.history?.map((item) => {
                return (
                  <p
                    className={`p-5 mt-5 rounded-lg   ${
                      item.role === "user" ? "bg-transparent" : "bg-white"
                    }`}
                  >
                    {item.role}:{JSON.parse(item.content).body}
                  </p>
                );
              })}

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
