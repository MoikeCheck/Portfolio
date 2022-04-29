import Head from "next/head";
import { Heading, Stack, Box } from "@chakra-ui/react";

import Container from "../components/Container";

const Contacts = () => {
  return (
    <Container>
      <Head>
        <title>Contacts - Mike Wheatley</title>
      </Head>
      <Stack
        spacing={8}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">LinkedIn</Heading>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Email</Heading>
        </Box>
        <Box pb={9} p={5} m={20} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Github</Heading>
        </Box>
      </Stack>
    </Container>
  );
};

export default Contacts;
