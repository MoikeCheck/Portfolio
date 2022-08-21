import Head from "next/head";
import {
  Heading,
  Text,
  Flex,
  Stack,
  Image,
  Box,
  UnorderedList,
  ListItem,
  HStack,
  Show,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { DiReact, DiAptana, DiGithubBadge } from "react-icons/di";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import Container from "../components/Container";

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenTwo,
    onOpen: onOpenTwo,
    onClose: onCloseTwo,
  } = useDisclosure();
  const {
    isOpen: isOpenThree,
    onOpen: onOpenThree,
    onClose: onCloseThree,
  } = useDisclosure();
  return (
    <Container>
      <Head>
        <title>Home - Mike Wheatley</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        pt={20}
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2} className="tracking-in-expand">
              Hi, I'm Mike Wheatley
            </Heading>
            <Text mb={1}>
              I’m a Junior Developer looking to break into the tech industry
              drawing motivation from an admiration of tech and awe of what
              coding can achieve. I have collaborated on projects, networked
              with industry professionals and studied in my spare time to reach
              a point where I am at today with JavaScript, HTML and CSS.
            </Text>
            <Text>
              I have more recently graduated from a 12 week software bootcamp,
              Northcoders, which has given me solid foundations for my future
              learning. I am ready and excited for the next step in my new
              career to maintain momentum and continue developing, creating
              projects within a professional setting.
            </Text>
            <Text>
              I'm currently working as a Junior Integrations Developer utilising
              Powershell scripting along with APIs to help bridge the gap
              between softwares.
            </Text>
          </Flex>
          <Image
            mt={[25, 10, 10, 10]}
            ml={[50, 12, 12, 10]}
            boxSize="200px"
            src="/assets/SelfImage2.png"
            alt="Image of Mike Wheatley"
          />
        </Flex>
      </Stack>
      <HStack justifyContent="center">
        <Heading fontSize="2xl">Skills</Heading>
      </HStack>
      <Stack
        pt={4}
        pb={20}
        spacing={8}
        direction={["column", "row", "row", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <Show above="md">
          <Menu isOpen={isOpen}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              aria-label="Courses"
              fontWeight="normal"
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
            >
              <HStack spacing="10px">
                <Heading fontSize="xl" mb={2}>
                  Backend
                </Heading>{" "}
                <DiAptana size={50} />
              </HStack>
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Box p={5} shadow="md" borderWidth="0px">
                <UnorderedList>
                  <ListItem>PostgreSQL</ListItem>
                  <ListItem>Jest</ListItem>
                  <ListItem>SQL</ListItem>
                  <ListItem>Node.js</ListItem>
                  <ListItem>PHP</ListItem>
                  <ListItem>Firebase</ListItem>
                  <ListItem>RESTful API</ListItem>
                </UnorderedList>
              </Box>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenTwo}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              aria-label="Courses"
              fontWeight="normal"
              onMouseEnter={onOpenTwo}
              onMouseLeave={onCloseTwo}
            >
              <HStack spacing="10px">
                <Heading fontSize="xl" mb={2}>
                  Frontend
                </Heading>{" "}
                <DiReact size={50} />
              </HStack>
              {isOpenTwo ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpenTwo} onMouseLeave={onCloseTwo}>
              <Box p={5} shadow="md" borderWidth="0px">
                <UnorderedList>
                  <ListItem>JavaScript</ListItem>
                  <ListItem>React</ListItem>
                  <ListItem>CSS</ListItem>
                  <ListItem>HTML</ListItem>
                  <ListItem>Bootstrap</ListItem>
                  <ListItem>Chakra UI</ListItem>
                  <ListItem>Next.js</ListItem>
                </UnorderedList>
              </Box>
            </MenuList>
          </Menu>
          <Menu isOpen={isOpenThree}>
            <MenuButton
              variant="ghost"
              mx={1}
              py={[1, 2, 2]}
              px={4}
              borderRadius={5}
              aria-label="Courses"
              fontWeight="normal"
              onMouseEnter={onOpenThree}
              onMouseLeave={onCloseThree}
            >
              <HStack spacing="10px">
                <Heading fontSize="xl" mb={2}>
                  Additional
                </Heading>{" "}
                <DiGithubBadge size={50} />
              </HStack>
              {isOpenThree ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpenThree} onMouseLeave={onCloseThree}>
              <Box p={5} shadow="md" borderWidth="0px">
                <UnorderedList>
                  <ListItem>Git</ListItem>
                  <ListItem>Powershell</ListItem>
                  <ListItem>Kanban</ListItem>
                  <ListItem>Agile</ListItem>
                  <ListItem>Postman</ListItem>
                  <ListItem>Figma</ListItem>
                </UnorderedList>
              </Box>
            </MenuList>
          </Menu>
        </Show>
        <Show below="md">
          <Tabs>
            <TabList>
              <Tab>
                <Heading fontSize="xl" mb={2}>
                  Backend
                </Heading>
              </Tab>
              <Tab>
                <Heading fontSize="xl" mb={2}>
                  Frontend
                </Heading>
              </Tab>
              <Tab>
                <Heading fontSize="xl" mb={2}>
                  Additional
                </Heading>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box p={5} shadow="md" borderWidth="0px">
                  <UnorderedList>
                    <ListItem>PostgreSQL</ListItem>
                    <ListItem>Jest</ListItem>
                    <ListItem>SQL</ListItem>
                    <ListItem>Node.js</ListItem>
                    <ListItem>PHP</ListItem>
                    <ListItem>Firebase</ListItem>
                    <ListItem>RESTful API</ListItem>
                  </UnorderedList>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={5} shadow="md" borderWidth="0px">
                  <UnorderedList>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>React</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>HTML</ListItem>
                    <ListItem>Bootstrap</ListItem>
                    <ListItem>Chakra UI</ListItem>
                    <ListItem>Next.js</ListItem>
                  </UnorderedList>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={5} shadow="md" borderWidth="0px">
                  <UnorderedList>
                    <ListItem>Git</ListItem>
                    <ListItem>Powershell</ListItem>
                    <ListItem>Kanban</ListItem>
                    <ListItem>Agile</ListItem>
                    <ListItem>Postman</ListItem>
                    <ListItem>Figma</ListItem>
                  </UnorderedList>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Show>
      </Stack>
    </Container>
  );
}
