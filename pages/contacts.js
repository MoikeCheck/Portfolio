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

const Contacts = () => {
  const { hasCopied, onCopy } = useClipboard("mikewheatley@hotmail.co.uk");

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
                    <form
                      action="https://formsubmit.co/048430bb1711d0a0b6c347896afd1cd7"
                      method="POST"
                    >
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <InputGroup>
                          <InputLeftElement>
                            <BsPerson />
                          </InputLeftElement>
                          <Input
                            type="text"
                            name="title"
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
                            name="email"
                            placeholder="Your Email"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          resize="none"
                        />
                      </FormControl>
                      <Button
                        mt={3}
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
                    </form>
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
