import React from "react";
import Home from "./About"
import Contact from "./Contact"
import Projects from "./Projects";
import Navbar from "./Navbar"
import Logo from './Logo'
import MobileDrawer from './MobileDrawer'
import { Flex, Box } from "@chakra-ui/react";
// import Skills from "./Skills";
// import ResearchInterests from "./components/research_interests";


export default function App() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      gap={{ base: 8, lg: 16 }}
      px={{ base: 6, lg: 12 }}
      py={3}
      maxW={{ base: "full", xl: "1440px"}}
      mx="auto"
    >
      <Logo />
            {/* Desktop Menu */}
      <Box display={{ base: "none", md: "block" }}>
        <Navbar />
      </Box>

      {/* Mobile Drawer */}
      <Box display={{ base: "block", md: "none" }}>
        <MobileDrawer />
      </Box>
      <Home />
      <Projects />
      {/* <Skills /> */}
      {/* <ResearchInterests /> */}
      <Contact />
    </Flex>
  );
}