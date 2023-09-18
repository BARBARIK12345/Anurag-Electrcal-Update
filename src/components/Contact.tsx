import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <Center>
        <Heading as={"h3"} size="xl">
          Contact Us
        </Heading>
      </Center>
      <Flex mt={{ sm: "0rem", md: "2rem" }} flexWrap={"wrap"}>
        <Box p={8} w={"50%"} borderRight={"2px"} borderColor="rgb(228 190 18)">
          <Heading display={{ sm: "none", md: "block" }} mt={"1rem"} as={"h3"} size="lg">
            Anurag Electricals
          </Heading>
          <Heading mt={"1rem"} as={"h4"} size="md" fontSize={{ base: "15px", md: "s" }}>
            Contact Person: Anurag Bhoir
          </Heading>
          <Text mt={"1rem"} fontSize={{ base: "15px", md: "s" }}>
            <b>Address:</b> House No 102, First Floor, Shree Shivshakti Vihar,
            Nagothane Pezari Road, Nagothana, Raigad - 402106, Maharashtra,
            India
          </Text>
          <HStack mt={"1rem"}>
            <PhoneIcon />
            <Text fontSize={{ base: "15px", md: "s" }}>+91-8062245122</Text>
          </HStack>
          <HStack mt={"0.5rem"}>
            <EmailIcon />
            <Text fontSize={{ base: "15px", md: "s" }}>banurag199@gmail.com</Text>
          </HStack>
        </Box>
        <ContactForm />
      </Flex>
    </div>
  );
};

export default Contact;
