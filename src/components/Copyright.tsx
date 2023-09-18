import { Center, HStack, Text } from "@chakra-ui/react";
import { BiCopyright } from "react-icons/bi";
const Copyright = () => {
  return (
    <Center>
      <HStack mt={{ md: 5, sm: 2 }} p={18} pb={{ md: 0, sm: 3 }}>
        <BiCopyright size={"1.3rem"} color={"#91959b"} />
        <Text fontSize={"1.2rem"} color={"#91959b"}>
          2023, Anurag Electricals
        </Text>
      </HStack>
    </Center>
  );
};

export default Copyright;
