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

import { skills } from "../data.js";

export default function Skills(props) {
  const { color } = props;
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
