import Head from "next/head";
import {
  Heading,
  Text,
  Flex,
  Stack,
  HStack,
  Box,
  Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiBootstrap,
  SiCss3,
  SiGithub,
  SiPhp,
  SiMysql,
  SiHtml5,
} from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";
import { GrHeroku } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import Container from "../components/Container";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Projects() {
  const { colorMode } = useColorMode();

  const navHoverBg = {
    light: "gray.300",
    dark: "gray.600",
  };

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
        mt={5}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Link
            style={{ textDecoration: "none" }}
            href="https://pet-app-beta.vercel.app/"
            passHref
          >
            <Box
              p={3}
              m={3}
              shadow="md"
              borderWidth="0px"
              _hover={{ bg: navHoverBg[colorMode] }}
            >
              <Heading mb={2}>Take A Paws</Heading>
              <Text mb={5}>
                For this final project whilst at Northcoders my team and I were
                tasked with creating a full stack product. Our web app MVP is a
                platform where pet owners can locate pet services near them with
                a range of utilities such as reviews, ratings, messaging and
                mapping.
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
                <SiHtml5 size="2rem" />
                <SiFirebase size="2rem" />
                <SiVercel size="2rem" />
              </HStack>
              <HStack ml={580}>
                <Link href="https://github.com/MoikeCheck/pet-app" passHref>
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<SiGithub />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isRound
                  />
                </Link>
              </HStack>
            </Box>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="https://simple-recipe-project.herokuapp.com/index.php"
            passHref
          >
            <Box
              p={3}
              m={3}
              shadow="md"
              borderWidth="0px"
              _hover={{ bg: navHoverBg[colorMode] }}
            >
              <Heading mb={2}>PHP Recipe Book</Heading>
              <Text mb={5}>
                For this project I wanted learn more about PHP, as well as a
                MySQL. I thought having a simple recipe book that could store
                recipe details in a database would be a good exercise with these
                new tools.
              </Text>
              <HStack
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <SiPhp size="2rem" />
                <DiMaterializecss size="2rem" />
                <SiMysql size="2rem" />
                <SiCss3 size="2rem" />
                <SiHtml5 size="2rem" />
                <GrHeroku size="2rem" />
              </HStack>
              <HStack ml={580}>
                <Link
                  href="https://github.com/MoikeCheck/php-recipe-book.git"
                  passHref
                >
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<SiGithub />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isRound
                  />
                </Link>
              </HStack>
            </Box>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="https://zestnews.herokuapp.com/api"
            passHref
          >
            <Box
              p={3}
              m={3}
              shadow="md"
              borderWidth="0px"
              _hover={{ bg: navHoverBg[colorMode] }}
            >
              <Heading mb={2}>NC News API</Heading>
              <Text mb={5}>
                This was my first solo project whilst on the Northcoders
                bootcamp. For this project I built a RESTful API that will
                connect to my Front End project enabling the data to be
                requested, added, modified and removed by the user.
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
              <HStack ml={580}>
                <Link href="https://github.com/MoikeCheck/be-NCnews" passHref>
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<SiGithub />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isRound
                  />
                </Link>
              </HStack>
            </Box>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href="https://zestnews.netlify.app/"
            passHref
          >
            <Box
              p={3}
              m={3}
              shadow="md"
              borderWidth="0px"
              _hover={{ bg: navHoverBg[colorMode] }}
            >
              <Heading mb={2}>NC News</Heading>
              <Text mb={5}>
                For my front-end project I built a news site pulling data from
                an API and utilizing the React framework to create a seamless
                multi-page site with reusable components.
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
                <SiHtml5 size="2rem" />
                <SiNetlify size="2rem" />
              </HStack>
              <HStack ml={580}>
                <Link
                  href="https://github.com/MoikeCheck/nc-news.git/"
                  passHref
                >
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<SiGithub />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isRound
                  />
                </Link>
              </HStack>
            </Box>
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
}
