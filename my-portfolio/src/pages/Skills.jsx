// src/components/Skills.js
import { PatchCheckFill, CpuFill } from "react-bootstrap-icons";
// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import AccordionCustom from "../components/ui/accordion.jsx";
import {
  Separator,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  // Accordion,
  // Span,
} from "@chakra-ui/react";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
// import { skills } from "../data.js";

export default function Skills(props) {
  const { color } = props

  const skills = [
    {
      title: "JavaScript",
      text: "Developed code for the Sensor Station remote data logger in JavaScript and NodeJs",
      value: "a",
      icon: <RiJavascriptFill />,
    },
    {
      title: "React",
      text: "Developed a data portal website using React components",
      value: "b",
      icon: <RiReactjsFill />,
    },
    {
      title: "R",
      text: "Analyzed multiple datasets using R",
      value: "c",
      icon: <IoStatsChart />,
    },
  ]

  return (
    <Container maxW={"3xl"} id="skills">
      <br></br>
      <br></br>
      <Stack
        as={Box}
        textAlign={"left"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* <Stack align="left" direction="row" px={4}> */}
        {/* <HStack mx={4}> */}
        {/* <Text color={`${color}.400`} fontWeight={800}>
                <h1>Meelyn Mayank Pandit</h1>
              </Text> */}
        <Text fontWeight={800} textStyle="xl" color={color}>
          Skills
        </Text>
        {/* </HStack> */}
        {/* </Stack> */}

        <AccordionCustom items={skills} color={color} />
      </Stack>
    </Container>
  );
}
