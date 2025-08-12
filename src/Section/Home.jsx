import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  useTheme,
  Icon,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import AnimatedSection from "../components/ui/AnimatedSection";
import profilePic from "../images/Profile_pic.jpg";

function Home() {
  const theme = useTheme();
  return (
    <>
      <Box
        pt={5}
        // height="80vh"
        display="flex"
        justifyContent="center"
        textAlign="center"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          w={"100%"}
          alignItems={"center"}
          gap={{ base: "20px", lg: "70px" }}
          p={{ base: "10px", lg: "20px" }}
        >
          <Image
            src={profilePic}
            alignSelf={{ base: "center", lg: "initial" }}
            borderRadius={"73% 27% 70% 30% / 30% 45% 55% 70% "}
            boxShadow={"-10px 6px 0px 8px rgba(191,176,176,0.75)"}
            w={{ base: "60%", lg: "30%" }}
            ml={5}
            loading="eager"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "-15px 10px 0px 12px rgba(191,176,176,0.85)"
            }}
          />
          <Box maxW={{ base: "100%", lg: "60%" }}>
            <AnimatedSection delay={0.2}>
              <Text
                fontSize={{ base: "2xl", lg: "5xl" }}
                color={theme.colors.jhataak}
                fontWeight={"bold"}
                fontFamily={theme.fonts.subheading}
              >
                I&apos;M AMIT KUMAR MURMU
              </Text>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <Text
                fontFamily={theme.fonts.text}
                fontSize={{ base: "xl", lg: "3xl" }}
                fontWeight={"bold"}
                mb={4}
              >
                A Full Stack Developer
              </Text>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
            <Text
              fontSize={{ base: "lg", lg: "23px" }}
              textAlign={"left"}
              fontFamily={theme.fonts.text}
              pr={{ base: "0", lg: 50 }}
            >
              A seasoned Software Developer with 1.5 years of hands-on
              experience. I specialize in crafting dynamic and scalable web
              applications using a technology stack that includes MongoDB,
              Express, React, Node.js, and various other libraries.
            </Text>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.8}>
              <Button
                _hover={{ 
                  backgroundColor: theme.colors.jhataak,
                  transform: "translateY(-2px)",
                  boxShadow: "lg"
                }}
                style={{ ...theme.button }}
                as="a"
                target="_blank"
                href="https://drive.google.com/file/d/1-Ok53vq9xYVc-QjIdW6IM6KJZln7tvcv/view?usp=sharing"
                fontSize={{ base: 20, lg: 14 }}
                m={"20px"}
                rightIcon={<Icon as={FaDownload} />}
                transition="all 0.3s ease"
              >
                DOWNLOAD CV
              </Button>
            </AnimatedSection>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
