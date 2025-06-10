import { Box, useTheme } from "@chakra-ui/react";
import "./App.css";
import Navigation from "./Navigation";
import Contact from "./Section/Contact";
import Education from "./Section/Education";
import Home from "./Section/Home";
import Projects from "./Section/Project";
import Skills from "./Section/Skill";
import { useContext } from "react";
import { ThemeContext } from "./AllContext";
// import ChatBotWidget from "./components/ChatBotWidget";

function App() {
  const theme = useTheme()
  const { isDark } = useContext(ThemeContext);
  return (
    <Box bg={isDark ? "#000" : "#fff"} color={isDark ? theme.colors.light : theme.colors.dark}>
      <div className="App">
        <Navigation />
        <div id="home" style={{ position: "relative" }}>
          <Home />
        </div>
        <div id="education" style={{ position: "relative" }}>
          <Education />
        </div>
        <div id="skills" style={{ position: "relative" }}>
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        {/* <ChatBotWidget/> */}
      </div>
    </Box>
  );
}

export default App;
