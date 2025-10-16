import React from "react";
import Home from "./About"
import Contact from "./Contact"
import Projects from "./Projects";
import MenuLinks from './MenuLinks'
import Navbar from "./Navbar"
import Logo from './Logo'
import MobileDrawer from './MobileDrawer'
import { Flex, Box } from "@chakra-ui/react";
import '../App.css'


// import Skills from "./Skills";
// import ResearchInterests from "./components/research_interests";


export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      {/* <Skills /> */}
      {/* <ResearchInterests /> */}
      <Contact />
    </>
  );
}