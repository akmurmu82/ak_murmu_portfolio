import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import MyHeading from "./components/Heading";
import { ProjectCard } from "./components/ProjectCard";
import interviewHub from "../images/InterviewHub.png";
import Todoist from "../images/Todoist.png";
import GroceryHub from "../images/GroceryHub.png";
import Zappose from "../images/Zappose.png";
import HowWellDoYouKnowMe from "../images/HowWellDoYouKnowMe.png";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const projectDetails = {
  interviewHub: {
    title: "Interview Hub",
    image: interviewHub,
    ghLink: "https://github.com/akmurmu82/InterviewIQ-Hub",
    liveLink: "https://fe-interviewiq-hub.netlify.app/",
    description:
      "A collaborative full stack project made to solve real-life problems.",
    details: {
      features: "Landing page, MCQ listing, Result according to marks",
      responsibility: "Implemented the Backend by myself",
      techStack: "Reack, Chakra UI, Node.js, Express, Mongoose",
    },
  },
  todoist: {
    title: "Todoist",
    image: Todoist,
    ghLink: "https://github.com/akmurmu82/Todoist-clone",
    liveLink: "https://todoist-clone-ak.vercel.app/",
    description: "Made this in a LinkedIn Challenge in just 7 days.",
    details: {
      features:
        "Add Todo, Edit todo and delete todo, collapsable side panel, UI resembled original site.",
      responsibility: "Navbar, Footer",
      techStack: "HTML, CSS, JavaScript, React",
    },
  },
  zapposClone: {
    title: "Zappos.com Clone",
    image: Zappose, // Make sure to import or define this image
    ghLink: "https://github.com/akmurmu82/zappos-clone/",
    liveLink: "https://zappos-clone-ak.vercel.app/",
    description:
      "A frontend clone of Zappos.com with responsive design and user-friendly interface.",
    details: {
      features: "Authenticatino, Product Listing, Product Details, Cart Functionality",
      responsibility: "Designed and implemented the UI components. Build the database.",
      techStack: "React, Tailwind CSS, Express, MongoDB, Mongoose, React Redux",
    },
  },
  groceryHub: {
    title: "GroceryHub",
    image: GroceryHub,
    ghLink: "https://github.com/akmurmu82/Grocery_Hub",
    liveLink: "https://velvety-chebakia-b2faa1.netlify.app/",
    description: "Collaborative project made in Construct week in just 7 days",
    details: {
      features: "Multiple product listing, Car",
      responsibility: "Navbar, Footer",
      techStack: "HTML, CSS, Java Script, JSON server",
    },
  },
  howWellDoYouKnowMe: {
    title: "How Well Do You Know Me",
    image: HowWellDoYouKnowMe, // replace this with the appropriate image variable or path
    ghLink: "https://github.com/akmurmu82/HowWellDoYouKnowMe", // update if needed
    liveLink: "https://howwelldoyouknowme2.vercel.app/", // replace with the actual live link
    description: "An interactive quiz app where I can test how well my friends know me.",
    details: {
      features: "User login, personalized quiz, scoring system, dynamic leaderboard, downloadable certificates",
      responsibility: "Implemented the frontend with React, designed the database schema.",
      techStack: "React, Chakra UI, Node.js, Express, MongoDB",
    },
  },  
};

function Projects() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box
      display="flex"
      w={{ base: "90%", lg: "85%" }}
      justifyContent="center"
      m={"auto"}
      textAlign="center"
    >
      <Box>
        <MyHeading title="PROJECTS" />
        <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={10}>
          {Object.values(projectDetails).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              ghLink={project.ghLink}
              liveLink={project.liveLink}
              description={project.description}
              info={() => openModal(project)}
              isOpen={isOpen}
              onClose={onClose}
            />
          ))}
        </Grid>
      </Box>
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader alignSelf={"center"}>
              {selectedProject.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{selectedProject.description}</Text>
              <Box>
                <Text fontSize="xl" as={"b"}>
                  Features
                </Text>
                <Text mb={2}>{selectedProject.details.features}</Text>
                <Text fontSize="xl" as={"b"}>
                  Responsibility
                </Text>
                <Text mb={2}>{selectedProject.details.responsibility}</Text>
                <Text fontSize="xl" as={"b"}>
                  Tech Stack
                </Text>
                <Text mb={2}>{selectedProject.details.techStack}</Text>
              </Box>
            </ModalBody>
            <ModalFooter>
              <HStack justifyContent={"space-between"} w={"100%"}>
                <a
                  href={selectedProject.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    _hover={{ bg: "transparent" }}
                    icon={<FaGithub />}
                    colorScheme="teal"
                    variant="ghost"
                    fontSize={30}
                    aria-label="Info"
                  />
                </a>
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    _hover={{ bg: "transparent" }}
                    icon={<GoLinkExternal />}
                    colorScheme="teal"
                    variant="ghost"
                    fontSize={30}
                    aria-label="Info"
                  />
                </a>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}

export default Projects;
