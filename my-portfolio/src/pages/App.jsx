import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  redirect,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects";
import Skills from './Skills'
// import MenuLinks from './MenuLinks'
// import Navbar from "./Navbar"
// import Logo from './Logo'
// import MobileDrawer from './MobileDrawer'
import Layout from '../components/ui/Layout'
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer"

import { Flex, Box } from "@chakra-ui/react";
import '../App.css'



export default function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Navbar /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About color={"whiteAlpha.950"} />} />
          <Route
            path="/projects"
            element={<Projects color={"whiteAlpha.950"} />}
          />
          <Route path="/skills" element={<Skills color={"whiteAlpha.950"} />} />
          <Route
            path="/contact"
            element={<Contact color={"whiteAlpha.950"} />}
          />
        </Route>
      </>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(<App />)