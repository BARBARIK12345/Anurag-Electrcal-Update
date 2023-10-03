import { Heading } from "@chakra-ui/react";
import { Link } from "react-scroll";


const HeadingItems = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Services",
      link: "services",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <>
      {navItems.map(({name , link} , index) => (
        <Link
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        key={index}
      >
        <Heading 
        _hover={{ color: "white"  }}
        transition={"0.5s ease-in-out"}
        as="h3"
         marginRight={5}
         fontSize={{ lg: "1.5rem", md: "1rem" }}
         cursor={'pointer'}
         color={"rgb(228 190 18)"}>
          {name}
        </Heading>
        </Link>
      ))}
    </>
  );
};

export default HeadingItems;
