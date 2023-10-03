import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { notification } from "antd";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const form = useRef(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name.length === 0) {
      api["warning"]({
        message: "Please enter the details so we can get back",
        duration: 2.5,
      });
    } else if (name.length <= 2) {
      api["warning"]({
        message: "Please enter a valid name",
        duration: 2.5,
      });
    } else if (mobile.length === 0 || mobile.length != 10) {
      api["warning"]({
        message: "Incorrect Mobile Number",
        description: "Please enter a valid mobile number.",
        duration: 2,
      });
    } else if (email.length <= 5 || !email.match(validRegex)) {
      api["warning"]({
        message: "Please enter a valid email Id",
        description: "So we can get back to you.",
        duration: 2.5,
      });
      // else if (message.length === 0) {
      //   api["warning"]({
      //     message: "Please add a message",
      //     description: "And let us know how can we assist you.",
      //     duration: 2.5,
      //   });
    } else {
      const url = "http://localhost/anurag/formsubmit.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("mobile", mobile);
      fData.append("email", email);
      fData.append("message", message);
      axios
        .post(url, fData)
        .then(() =>
          api["success"]({
            message: "Thank you for the message",
            description: "We'll get back to you soon.",
            duration: 2.5,
          })
        )
        .catch(() =>
          api["info"]({
            message: "Your Message could not be sent",
            description: "Please try again in some time.",
            duration: 2.5,
          })
        );

      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current!,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
      setName("");
      setMobile("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
    {contextHolder}
    <Box w={{ base: "100%", md: "50%" }} fontSize={{ base: "0.5rem" }}>
      <Center>
        <form ref={form} style={{ display: "contents" }} method="post"> 
        {/* <form style={{ display: "contents" }} method="post"> */}
          <FormControl width={{ base: "92%", md: "65%" }} textAlign={"center"}>
            <FormLabel mt={4}>Name</FormLabel>
            <Input
              type="name"
              name="name"
              placeholder="Please enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel mt={4}>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="PLease enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel mt={4}>Phone</FormLabel>
            <Input
              type="number"
              name="mobile"
              placeholder="PLease enter your Phone"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <FormLabel mt={4}>Your Message</FormLabel>
            <Textarea
              resize="none"
              placeholder="Please enter your message here"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              display={"block"}
              left={{ base: "41%", md: 0 }}
              backgroundColor="rgb(228 190 18)"
              mt={4}
              colorScheme="yellow"
              type="submit"
              _hover={{ backgroundColor: "yellow" }}
              onSubmit={handleSubmit}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Center>
    </Box>
    </>
  );
};

export default ContactForm;
