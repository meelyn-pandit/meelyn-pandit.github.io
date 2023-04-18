import React from "react";
import Home from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ResearchInterests from "./components/research_interests";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <ResearchInterests />
      <Contact />
    </main>
  );
}