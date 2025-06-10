import { useState, useEffect } from "react";
import { Box, IconButton, Flex, useTheme } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { IoIosMailOpen } from "react-icons/io";
import ThemeToggleButton from "./components/ThemeToggleButton";
import ChatBotWidget from "./components/ChatBotWidget";

function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Add some offset to make the active section change slightly before reaching the actual section
      let currentSection = "";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = sectionId;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      position="fixed"
      bottom={{ base: 0, lg: "auto" }}
      right={{ base: 0, lg: 0 }}
      width={{ base: "100%", lg: "auto" }}
      backgroundColor="transparent"
      height={{ base: "auto", lg: "100vh" }}
      padding={{ base: 1, lg: 4 }}
      display="flex"
      zIndex={10}
    >
      <ThemeToggleButton />
      <Flex
        listStyleType="none"
        display="flex"
        gap={"10px"}
        margin={"auto"}
        height={"auto"}
        justifyContent="space-around"
        flexDirection={{ base: "row", lg: "column" }}
      >
        <MenuItem
          onClick={() => scrollToSection("home")}
          icon={<FaUser />}
          isActive={activeSection === "home"}
        />
        <MenuItem
          onClick={() => scrollToSection("education")}
          icon={<FaGraduationCap />}
          isActive={activeSection === "education"}
        />
        <MenuItem
          onClick={() => scrollToSection("skills")}
          icon={<GrGraphQl />}
          isActive={activeSection === "skills"}
        />
        <MenuItem
          onClick={() => scrollToSection("projects")}
          icon={<GrProjects />}
          isActive={activeSection === "projects"}
        />
        <MenuItem
          onClick={() => scrollToSection("contact")}
          icon={<IoIosMailOpen />}
          isActive={activeSection === "contact"}
        />
        <ChatBotWidget/>
      </Flex>
    </Box>
  );
}

export default Navigation;

function MenuItem({ onClick, icon, isActive }) {
  const theme = useTheme();

  return (
    <IconButton
      onClick={onClick}
      isRound={true}
      boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
      _hover={{ bg: theme.colors.secondary }}
      aria-label="Navigate to section"
      fontSize={{ base: "20px", lg: "20px" }}
      icon={<Box padding={5}>{icon}</Box>}
      bg={isActive ? theme.colors.jhataak : "#f3f3f3"}
      h={"auto"}
    />
  );
}
