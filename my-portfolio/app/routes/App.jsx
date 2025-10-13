import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, Box } from '@chakra-ui/react'
// import { Routes, Route } from 'react-router-dom'
// import Home from "./components/about";
// import Contact from "./components/contact";
// import Navbar from "./components/navbar";
// import Projects from "./components/projects";
// import Skills from "./components/skills";
// import ResearchInterests from "./components/research_interests";

export default function App() {
  return (
    <h1>Hello World!</h1>
    // <Box minH={"100vh"} 
    //      bg={useColorModeValue("gray.300", "gray.900")}
    //      >
    //   <Navbar />
    //     <Routes>
    //         <Route 
    //             path='/' 
    //             element={<Home />} 
    //         />
    //         <Route 
    //             path='/about' 
    //             element={<ResearchInterests />} 
    //         />
    //         <Route 
    //             path='/projects' 
    //             element={<Projects />} 
    //         />
    //         <Route 
    //             path='/skills' 
    //             element={<Skills />} 
    //         />
    //         <Route 
    //             path='/contact' 
    //             element={<Contact />} 
    //         />
    //     </Routes>
    //   <Home />
    //   <Projects />
    //   <Skills />
    //   <ResearchInterests />
    //   <Contact />
    // </Box>
  );
}