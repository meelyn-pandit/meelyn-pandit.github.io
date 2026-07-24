import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Soundscape from "./components/soundscape";
import AgentModel from "./components/agentModel";
import NoiseEffects from "./components/noiseEffects";

// Scroll to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// The single-page portfolio.
function Portfolio() {
  return (
    <Box as="main" color="gray.400" bg="gray.900">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/soundscape" element={<Soundscape />} />
        <Route path="/agent-based-model" element={<AgentModel />} />
        <Route path="/noise-effects" element={<NoiseEffects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
