import { Heading } from "@chakra-ui/react";

const HeadingItems = () => {
  const navItems = ["Home", "About", "Services", "Contact Us"];

  return (
    <>
      {navItems.map((nav) => (
        <Heading 
        _hover={{ color: "rgb(228 190 18)" }}
        transition={"0.5s ease-in-out"}
        key={nav} 
        as="h3"
         marginRight={5}
         fontSize={{ lg: "1.5rem", md: "1rem" }}
         cursor={'pointer'}>
          {nav}
        </Heading>
      ))}
    </>
  );
};

export default HeadingItems;
