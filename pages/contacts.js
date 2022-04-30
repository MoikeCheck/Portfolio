import Head from "next/head";
import { Heading, Stack, Image, Text } from "@chakra-ui/react";

import Container from "../components/Container";

const Contacts = () => {
  return (
    <Container>
      <Head>
        <title>Contacts - Mike Wheatley</title>
      </Head>
      <Text textAlign={"center"} pt={10}>
        If you need to contact me please find me details below.
      </Text>
      <Stack
        pt={20}
        spacing={8}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Stack>
          <Image
            ml={12}
            boxSize="200px"
            src="/assets/linkedin.png"
            alt="LinkedIn icon image"
          />
          <Heading fontSize="xl" textAlign={"center"}>
            LinkedIn
          </Heading>
        </Stack>

        <Stack>
          <Image
            ml={12}
            boxSize="200px"
            src="/assets/email.png"
            alt="Email icon image"
          />
          <Heading fontSize="xl" textAlign={"center"}>
            Email
          </Heading>
        </Stack>
        <Stack>
          <Image
            ml={12}
            boxSize="200px"
            src="/assets/github.png"
            alt="Github icon image"
          />
          <Heading fontSize="xl" textAlign={"center"}>
            Github
          </Heading>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contacts;
