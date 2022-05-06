import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Container from "../components/Container";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contacts = () => {
  const { hasCopied, onCopy } = useClipboard("mikewheatley@hotmail.co.uk");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const notify = () =>
    toast("Message Sent!", {
      duration: 4000,
      position: "top-center",
      icon: "👏",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      title,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setTitle("");
        setEmail("");
        setMessage("");
        notify();
      }
    });
  };

  return (
    <Container>
      <Head>
        <title>Contacts - Mike Wheatley</title>
      </Head>
      <Flex align="center" justify="center" id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                Get in Touch
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <Link href="https://github.com/MoikeCheck" passHref>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link
                    href="http://linkedin.com/in/michael-wheatley/"
                    passHref
                  >
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          type="text"
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          name="name"
                          placeholder="Your Name"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail />{" "}
                        </InputLeftElement>
                        <Input
                          type="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>
                    <Button
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      type="submit"
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      isFullWidth
                    >
                      Send Message
                    </Button>
                    <Toaster
                      toastOptions={{
                        className: "",
                        style: {
                          margin: "300px",
                        },
                      }}
                    />
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contacts;
