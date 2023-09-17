import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Home from "./components/Home";
import about from "./data/aboutUs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Box p={10}>
        <NavBar />
        <Home />
        <AboutUs details={about} />
        <Services />
        <Contact />
      </Box>
    </>
  );
}

export default App;
