import { Box } from "@chakra-ui/react";
import Carousels from "./Carousels";
import arr from "../data/home";

const Home = () => {
  return (
    <Box>
      <Carousels imageArr={arr} />
    </Box>
  );
};

export default Home;
