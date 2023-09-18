import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Home from "./components/Home";
import about from "./data/aboutUs";
import AboutUs from "./components/AboutUs";
import { Reveal } from "./components/Reveal";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <Box p={10}>
        <NavBar />
        <Reveal>
        <Home />
        </Reveal>
        <Reveal>
        <AboutUs details={about} />
        </Reveal>
        <Reveal>
        <Services />
        </Reveal>
        <Reveal>
        <Contact />
        </Reveal>
        <Reveal>
        <Copyright/>
        </Reveal>

      </Box>
    </>
  );
}

export default App;
