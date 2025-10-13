import React from "react";
import Home from "./About"
import Contact from "./Contact"
import Projects from "./Projects";
import Navbar from "./Navbar"
// import Skills from "./Skills";
// import ResearchInterests from "./components/research_interests";


export default function App() {
  return (
    // <main className="text-gray-400 bg-gray-900 body-font">
    <>
      <Navbar />
      <Home />
      <Projects />
      {/* <Skills /> */}
      {/* <ResearchInterests /> */}
      <Contact />
    </>
    // </main>
  );
}