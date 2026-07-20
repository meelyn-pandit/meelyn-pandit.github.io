import React from "react";
import { Box } from "@chakra-ui/react";
import Home from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Publications from "./components/publications";
import ResearchInterests from "./components/research_interests";

export default function App() {
  return (
    <Box as="main" color="gray.400" bg="gray.900">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Publications />
      <ResearchInterests />
      <Contact />
    </Box>
  );
}
