import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
  BrowserRouter, Routes, Route, Outlet, Navigate, useLocation,
} from "react-router-dom";
import Home from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Publications from "./components/publications";

// Scroll back to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <Box color="gray.400" bg="gray.900" minH="100vh">
      <Navbar />
      <Box as="main">
        <Outlet />
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="publications" element={<Publications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
