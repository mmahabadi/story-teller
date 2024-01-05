import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoryProvider } from "./context/storyProvider";

function App() {
  return (
    <StoryProvider>
      <div className=" w-full h-screen flex flex-wrap justify-between py-3 bg-gradient-to-r from-sky-500 to-indigo-500 ">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </StoryProvider>
  );
}

export default App;
