import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  ListItem,
  UnorderedList,
  Flex,
  Center,
  Box,
} from "@chakra-ui/react";

import service from "../data/service";

const Services = () => {
  return (
    <Box mt="1rem" id="services">
      <Center>
        <Heading as={"h3"} size="xl">
          Services
        </Heading>
      </Center>
      <Flex flexWrap={"wrap"} justifyContent={"center"}>
        {service.map(({ name, img, list }, index) => (
          <Card
            transition={"0.5s ease-in-out"}
            _hover={{ transform: "scale(1.05)" }}
            maxW="md"
            h={{ lg: "32rem" }}
            margin={5}
            width={{ lg: "30%" }}
            bgColor={"inherit"}
            color={"white"}
            border={"2px solid"}
            borderColor={"rgb(228 190 18)"}
            paddingBottom={5}
            key={index}
          >
            <CardBody position={"relative"}>
              <Image
                height={{sm:'13rem',lg:"16rem"}}
                width={{ xl: "100%", lg: "20rem", sm: "18rem" }}
                src={img}
                alt={name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Center>
                  <Heading size="md">{name}</Heading>
                </Center>
                <UnorderedList>
                  {list.map((data, index) => (
                    <ListItem mt={"0.25rem"} key={index}
                    fontSize={{ base: "15px", md: "sm" }}>
                      {data}
                    </ListItem>
                  ))}
                </UnorderedList>
                <Center>
                  <Text
                    color="rgb(228 190 18)"
                    fontSize="2xl"
                    position={"absolute"}
                    bottom="-0.45rem"
                    cursor={'pointer'}
                    left={{ md: "38%", sm: "36%" }}
                  >
                    Contact
                  </Text>
                </Center>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
