import { useContext, useState, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Icon,
  Link,
  useTheme,
  VStack,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import MyHeading from "./components/Heading";
import { ThemeContext } from "../AllContext";
import { IoIosSend } from "react-icons/io";
import AnimatedSection from "../components/ui/AnimatedSection";
import { useEmailJS } from "../hooks/useEmailJS";

const GetInTouch = () => {
  const { isDark } = useContext(ThemeContext);
  const theme = useTheme();
  const { sendEmail, isLoading } = useEmailJS();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await sendEmail(formData, formRef);
    
    if (result.success) {
      // Reset form fields
      setFormData({
        name: "",
        number: "",
        subject: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <MyHeading title="GET IN TOUCH" />
      <Box
        color={isDark ? theme.colors.light : theme.colors.dark}
        pb={100}
        px={5}
        w={{ base: "90%", lg: "85%" }}
        m={"auto"}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-around"
          gap={8}
        >
          <Box w={{ base: "100%", md: "40%" }} mb={{ base: 10, md: 0 }}>
            <AnimatedSection direction="left" delay={0.2}>
              <Heading as="h2" size="lg" mb={5}>
                DON&apos;T BE SHY!
              </Heading>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.4}>
            <Text
              fontSize={{ base: "lg", lg: "20px" }}
              textAlign={"left"}
              fontFamily={theme.fonts.text}
              mb={"10px"}
            >
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </Text>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.6}>
            <Box mb={5}>
              <Flex align="center" mb={3}>
                <Icon
                  as={MdLocationOn}
                  w={7}
                  h={10}
                  color={theme.colors.jhataak}
                  mr={5}
                />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>ADDRESS</Text>
                  <Text>West Bengal, India</Text>
                </VStack>
              </Flex>
              <Flex align="center" mb={3}>
                <EmailIcon w={7} h={10} color={theme.colors.jhataak} mr={5} />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>E-MAIL</Text>
                  <Link href="mailto:amitkumar655921@gmail.com" isExternal>
                    amitkumar655921@gmail.com
                  </Link>
                </VStack>
              </Flex>
              <Flex align="center" mb={3}>
                <Icon
                  as={FaGithub}
                  w={7}
                  h={10}
                  color={theme.colors.jhataak}
                  mr={5}
                />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>GITHUB</Text>
                  <Link href="https://github.com/akmurmu82" isExternal>
                    akmurmu82
                  </Link>
                </VStack>
              </Flex>
              <Flex align="center">
                <Icon
                  as={FaLinkedin}
                  w={7}
                  h={10}
                  color={theme.colors.jhataak}
                  mr={5}
                />
                <VStack alignItems={"flex-start"} gap={0}>
                  <Text>LINKEDIN</Text>
                  <Link
                    href="https://linkedin.com/in/akmurmu82"
                    isExternal
                  >
                    akmurmu82
                  </Link>
                </VStack>
              </Flex>
            </Box>
            </AnimatedSection>
          </Box>
          
          <Box w={{ base: "100%", md: "60%" }}>
            <AnimatedSection direction="right" delay={0.2}>
              <Heading as="h2" size="lg" mb={5}>
                Message me
              </Heading>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <Flex direction="column" gap={3} color="#000">
                <Input
                  required
                  placeholder="YOUR NAME *"
                  name="name"
                  value={formData.name}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Input
                  required
                  placeholder="YOUR NUMBER *"
                  name="number"
                  type="number"
                  value={formData.number}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Input
                  placeholder="YOUR SUBJECT"
                  name="subject"
                  value={formData.subject}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Input
                  required
                  placeholder="YOUR EMAIL *"
                  name="email"
                  type="email"
                  value={formData.email}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                />
                <Textarea
                  placeholder="YOUR MESSAGE *"
                  name="message"
                  value={formData.message}
                  bg={theme.colors.light}
                  border="none"
                  onChange={handleChange}
                  rows={6}
                />
                <HStack>
                  <Button
                    isLoading={isLoading}
                    loadingText="Sending..."
                    rightIcon={<Icon as={IoIosSend} />}
                    colorScheme="yellow"
                    type="submit"
                    bg={theme.colors.jhataak}
                    alignSelf="flex-start"
                    _hover={{ 
                      transform: "translateY(-2px)",
                      boxShadow: "lg"
                    }}
                    transition="all 0.2s"
                  >
                    SEND MESSAGE
                  </Button>
                  <Text color={"red"} as={"bold"}>
                    * marked fields are must
                  </Text>
                </HStack>
              </Flex>
            </form>
            </AnimatedSection>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default GetInTouch;
