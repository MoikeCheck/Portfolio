import Head from "next/head";
import { Heading, Text, Flex, Stack, HStack, Image } from "@chakra-ui/react";
import {
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiBootstrap,
  SiCss3,
} from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import Container from "../components/Container";

export default function Projects() {
  return (
    <Container>
      <Head>
        <title>Projects - Mike Wheatley</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
        mt={10}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>NC News API</Heading>
          <Text mb={5}>
            This was my first solo project whilst on the Northcoders bootcamp.
            For this project I built a RESTful API that will connect to my Front
            End project enabling the data to be requested, added, modified and
            removed by the user.
          </Text>
          <HStack
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <IoLogoJavascript size="2rem" />
            <SiJest size="2rem" />
            <SiNodedotjs size="2rem" />
            <SiPostgresql size="2rem" />
            <GrHeroku size="2rem" />
          </HStack>
          <Heading mb={2} mt={10}>
            NC News
          </Heading>
          <Text mb={5}>
            For my front-end project I built a news site pulling data from an
            API and utilizing the React framework to create a seamless
            multi-page site with reusable componants.
          </Text>
          <HStack
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <IoLogoReact size="2rem" />
            <IoLogoJavascript size="2rem" />
            <SiBootstrap size="2rem" />
            <SiCss3 size="2rem" />
            <SiNetlify size="2rem" />
          </HStack>
          <Heading mb={2} mt={10}>
            Take A Paws
          </Heading>
          <Text mb={5}>
            For this final project whilst at Northcoders my team and I were
            tasked with creating a full stack product. Our web app MVP is a
            platform where pet owners can locate pet services near them with a
            range of utilities such as reviews, ratings, messaging and mapping.
          </Text>
          <HStack
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <IoLogoReact size="2rem" />
            <IoLogoJavascript size="2rem" />
            <SiBootstrap size="2rem" />
            <SiCss3 size="2rem" />
            <SiFirebase size="2rem" />
            <SiVercel size="2rem" />
          </HStack>
        </Flex>
      </Stack>
    </Container>
  );
}
