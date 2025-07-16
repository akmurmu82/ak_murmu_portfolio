import {
  Box,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import { FaGithub, FaInfoCircle, FaLaptop, FaMobileAlt } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";

export const ProjectCard = ({
  title,
  image,
  ghLink,
  liveLink,
  description,
  info,
}) => {
  const theme = useTheme();
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.6)",
    "rgba(255, 255, 255, 0.6)"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          boxShadow="lg"
          h={{ base: "30vh", lg: "40vh" }}
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Image src={image} alt={title} borderRadius="md" objectFit="cover" w="100%" h="100%" />
          <Text
            position="absolute"
            bottom={0}
            width="100%"
            bg={useColorModeValue("gray.800", "gray.900")}
            color="white"
            textAlign="center"
            p={2}
            fontWeight="bold"
          >
            {title}
          </Text>
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg={overlayBg}
            opacity={0}
            transition="opacity 0.3s"
            border={"1px solid"}
            _hover={{ opacity: 1 }}
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
          >
            <HStack spacing={4} pb={10}>
              <a href={ghLink} target="_blank" rel="noopener noreferrer">
                <IconButton
                  _hover={{ bg: "transparent" }}
                  icon={<FaGithub />}
                  color={theme.colors.jhataak}
                  fontSize={24}
                  bg={"transparent"}
                  aria-label="Code"
                />
              </a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <IconButton
                  _hover={{ bg: "transparent" }}
                  icon={<GoLinkExternal />}
                  color={theme.colors.jhataak}
                  fontSize={24}
                  bg={"transparent"}
                  aria-label="Live Demo"
                />
              </a>
              <IconButton
                _hover={{ bg: "transparent" }}
                icon={<FaInfoCircle />}
                color={theme.colors.jhataak}
                fontSize={24}
                bg={"transparent"}
                aria-label="Info"
                onClick={info}
              />
              <IconButton
                _hover={{ bg: "transparent" }}
                icon={<FaLaptop />}
                color={theme.colors.jhataak}
                fontSize={24}
                bg={"transparent"}
                aria-label="Live Preview"
                onClick={onOpen}
              />
            </HStack>
          </Box>
        </Box>
      </motion.div>

      {/* Live Preview Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title} - Live Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction={{ base: "column", md: "row" }} spacing={6} h="80vh">
              {/* Desktop Preview */}
              <Box flex={2} position="relative">
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  border="12px solid #1a202c"
                  borderRadius="lg"
                  boxShadow="xl"
                >
                  <iframe
                    src={liveLink}
                    title={`${title} Desktop Preview`}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </Box>
              </Box>
              
              {/* Mobile Preview */}
              <Box flex={1} position="relative" display={{ base: "none", md: "block" }}>
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  width="320px"
                  height="568px"
                  border="12px solid #1a202c"
                  borderRadius="2xl"
                  boxShadow="xl"
                >
                  <iframe
                    src={liveLink}
                    title={`${title} Mobile Preview`}
                    width="100%"
                    height="100%"
                    style={{ 
                      border: 'none',
                      transform: 'scale(0.9)',
                      transformOrigin: '0 0',
                      width: '111%',
                      height: '111%'
                    }}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </Box>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};