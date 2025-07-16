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
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import projectDetails from "../assets/projectDetails";

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
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={5}>
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
