import { HStack, Box, Image } from "@chakra-ui/react";
import HeadingItems from "./HeadingItems";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <HStack
      zIndex={5}
        justifyContent={"space-between"}
        paddingBottom={2}
        pos={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        backgroundColor={'black'}
        height={{ md: "5rem", sm: "3rem" }}
        fontSize={'sm'}
      >
        <Box>
          <Image
            boxSize={"fit-content"}
            objectFit="cover"
            src={logo}
            alt="Logo"
          />
        </Box>
        <Box marginRight={'2rem'}>
          <HStack>
            <HeadingItems />
          </HStack>
        </Box>
      </HStack>
    </div>
  );
};

export default NavBar;
