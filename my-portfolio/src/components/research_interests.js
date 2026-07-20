// src/components/research_interests.js
import React from "react";
import { Box, Flex, Heading, Text, Image, chakra } from "@chakra-ui/react";
import { BarChartLine, ClipboardDataFill } from "react-bootstrap-icons";
import { research_interests } from "../data";

const ChartIcon = chakra(BarChartLine);
const ClipboardIcon = chakra(ClipboardDataFill);

export default function ResearchInterests() {
  return (
    <Box as="section" id="research-interests">
      <Box maxW="6xl" mx="auto" px={5} py={10} textAlign="center">
        <ChartIcon boxSize={10} display="inline-block" mb={4} />
        <Heading as="h1" size={{ base: "lg", sm: "xl" }} fontWeight="medium" color="white" mb={12}>
          Research Background
        </Heading>
        <Flex wrap="wrap" m={4}>
          {research_interests.map((interest) => (
            <Box key={interest.image} p={4} w={{ base: "full", md: "1/2" }}>
              <Box h="full" bg="rgba(26, 32, 44, 0.4)" p={8} borderRadius="md">
                <ClipboardIcon boxSize={8} display="block" color="gray.500" mb={4} />
                <Text lineHeight="relaxed" mb={6}>{interest.quote}</Text>
                <Flex display="inline-flex" align="center">
                  <Image alt="interest" src={interest.image} />
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
