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
  useDisclosure,
  Badge,
  VStack,
  Skeleton
} from "@chakra-ui/react";
import { FaGithub, FaInfoCircle, FaLaptop, FaMobileAlt } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { useState } from "react";
import AnimatedSection from "../../components/ui/AnimatedSection";

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
  const [isDesktopLoading, setIsDesktopLoading] = useState(true);
  const [isMobileLoading, setIsMobileLoading] = useState(true);

  return (
    <>
      <AnimatedSection>
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          boxShadow="lg"
          pb={10}
          h={{ base: "40vh", lg: "40vh" }}
          transition="all 0.3s ease"
          _hover={{ 
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: "2xl"
          }}
          cursor="pointer"
        >
          <Image 
            src={image} 
            alt={title} 
            borderRadius="md" 
            objectFit="contain" 
            w="100%" 
            h="100%"
            loading="lazy"
          />
          <Text
            position="absolute"
            bottom={0}
            width="100%"
            bg={useColorModeValue("gray.800", "gray.900")}
            color="white"
            textAlign="center"
            p={2}
            fontWeight="bold"
            backdropFilter="blur(10px)"
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
            transition="all 0.3s ease"
            border={"1px solid"}
            _hover={{ opacity: 1 }}
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            backdropFilter="blur(5px)"
          >
            <HStack spacing={4} pb={10}>
              <a href={ghLink} target="_blank" rel="noopener noreferrer">
                <IconButton
                  _hover={{ 
                    bg: "transparent",
                    transform: "scale(1.2)",
                    color: theme.colors.jhataak
                  }}
                  icon={<FaGithub />}
                  color={theme.colors.jhataak}
                  fontSize={24}
                  bg={"transparent"}
                  aria-label="Code"
                  transition="all 0.2s"
                />
              </a>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <IconButton
                  _hover={{ 
                    bg: "transparent",
                    transform: "scale(1.2)",
                    color: theme.colors.jhataak
                  }}
                  icon={<GoLinkExternal />}
                  color={theme.colors.jhataak}
                  fontSize={24}
                  bg={"transparent"}
                  aria-label="Live Demo"
                  transition="all 0.2s"
                />
              </a>
              <IconButton
                _hover={{ 
                  bg: "transparent",
                  transform: "scale(1.2)",
                  color: theme.colors.jhataak
                }}
                icon={<FaInfoCircle />}
                color={theme.colors.jhataak}
                fontSize={24}
                bg={"transparent"}
                aria-label="Info"
                onClick={info}
                transition="all 0.2s"
              />
              <IconButton
                _hover={{ 
                  bg: "transparent",
                  transform: "scale(1.2)",
                  color: theme.colors.jhataak
                }}
                icon={<FaLaptop />}
                color={theme.colors.jhataak}
                fontSize={24}
                bg={"transparent"}
                aria-label="Live Preview"
                onClick={onOpen}
                transition="all 0.2s"
              />
            </HStack>
          </Box>
        </Box>
      </AnimatedSection>

      {/* Live Preview Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <Text>{title}</Text>
              <Badge colorScheme="blue" variant="subtle">
                Live Preview
              </Badge>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={8}
              h={{ base: "auto", md: "80vh" }}
              align="center"
              justify="center"
              p={4}
            >
              {/* Desktop Preview */}
              <Box
                flex={2}
                position="relative"
                w={{ base: "100%", md: "50%" }}
                h={{ base: "400px", md: "90%" }}
                minH="400px"
              >
                <VStack spacing={4} mb={4}>
                  <HStack>
                    <FaLaptop />
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      Desktop View
                    </Text>
                  </HStack>
                </VStack>
                <Box
                  w="100%"
                  h={{ base: "350px", md: "calc(100% - 40px)" }}
                  border="12px solid"
                  borderColor={useColorModeValue("gray.800", "gray.200")}
                  borderRadius="lg"
                  boxShadow="xl"
                  overflow="hidden"
                  position="relative"
                >
                  {isDesktopLoading && (
                    <Skeleton
                      position="absolute"
                      top={0}
                      left={0}
                      w="100%"
                      h="100%"
                      zIndex={1}
                    />
                  )}
                  <iframe
                    src={liveLink}
                    title={`${title} Desktop Preview`}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    onLoad={() => setIsDesktopLoading(false)}
                  />
                </Box>
              </Box>

              {/* Mobile Preview - Hidden on small screens */}
              <Box
                flex={1}
                position="relative"
                display={{ base: "block", md: "block" }}
                w={{ base: "100%", md: "40%" }}
                h="100%"
              >
                <VStack spacing={4} mb={4}>
                  <HStack>
                    <FaMobileAlt />
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      color={useColorModeValue("gray.700", "gray.200")}
                    >
                      Mobile View
                    </Text>
                  </HStack>
                </VStack>
                <Box
                  position="relative"
                  mx="auto"
                  w="270px"
                  h="500px"
                  border="12px solid"
                  borderColor={useColorModeValue("gray.800", "gray.200")}
                  borderRadius="2xl"
                  boxShadow="xl"
                  overflow="hidden"
                >
                  {isMobileLoading && (
                    <Skeleton
                      position="absolute"
                      top={0}
                      left={0}
                      w="100%"
                      h="100%"
                      zIndex={1}
                    />
                  )}
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
                    onLoad={() => setIsMobileLoading(false)}
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