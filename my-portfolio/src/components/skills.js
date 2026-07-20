// src/components/Skills.js
import React from "react";
import { Box, Flex, Heading, Text, chakra, SimpleGrid } from "@chakra-ui/react";
import { PatchCheckFill, CpuFill } from "react-bootstrap-icons";
import { skills } from "../data";

const CpuIcon = chakra(CpuFill);
const CheckIcon = chakra(PatchCheckFill);

export default function Skills() {
  return (
    <Box as="section" id="skills">
      <Box maxW="6xl" mx="auto" px={5} py={10}>
        <Box textAlign="center" mb={20}>
          <CpuIcon boxSize={10} display="inline-block" mb={4} />
          <Heading as="h1" size={{ base: "lg", sm: "xl" }} fontWeight="medium" color="white" mb={4}>
            Skills &amp; Technologies
          </Heading>
          <Text maxW={{ base: "3xl", xl: "2xl" }} mx="auto" lineHeight="relaxed">
            The languages, frameworks, and tools I work with day to day.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={2} maxW={{ lg: "4xl" }} mx="auto">
          {skills.map((skill) => (
            <Flex key={skill} bg="gray.800" borderRadius="md" p={4} h="full" align="center">
              <CheckIcon color="brand.400" boxSize={6} mr={4} flexShrink={0} />
              <Text as="span" fontWeight="medium" color="white">{skill}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
