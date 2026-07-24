// src/components/data_science.js
import React from "react";
import { Box, Flex, Heading, Text, Link, chakra } from "@chakra-ui/react";
import { GraphUp } from "react-bootstrap-icons";
import { dataScience } from "../data";

const GraphIcon = chakra(GraphUp);

export default function DataScience() {
  return (
    <Box as="section" id="data-science" color="gray.400" bg="gray.900">
      <Box maxW={{ lg: "3xl" }} mx="auto" px={5} py={10} textAlign="center">
        <Flex direction="column" w="full" mb={12}>
          <GraphIcon mx="auto" boxSize={10} mb={4} />
          <Heading as="h1" size={{ base: "lg", sm: "xl" }} mb={4} fontWeight="medium" color="white">
            Data Science and Visualization
          </Heading>
          <Text maxW={{ lg: "2xl" }} mx="auto" lineHeight="relaxed">
            Turning large, messy scientific datasets into models and clear
            visualizations — from agent-based simulations and machine learning
            to time-series and statistical analysis, grounded in peer-reviewed
            Ph.D. research.
          </Text>
        </Flex>
        <Flex direction="column" m={-2}>
          {dataScience.map((item) => {
            const card = (
              <>
                <Text letterSpacing="widest" fontSize="sm" fontWeight="medium" color="brand.400" mb={1}>
                  {item.subtitle}
                </Text>
                <Heading as="h2" fontSize="lg" fontWeight="medium" color="white" mb={2}>
                  {item.title}
                </Heading>
                <Text lineHeight="relaxed">{item.description}</Text>
              </>
            );
            return item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.title}
                p={4}
                textAlign="left"
                borderTop="1px solid"
                borderColor="gray.800"
                _hover={{ bg: "gray.800", textDecoration: "none" }}
                transition="background-color 0.2s">
                {card}
              </Link>
            ) : (
              <Box
                key={item.title}
                p={4}
                textAlign="left"
                borderTop="1px solid"
                borderColor="gray.800">
                {card}
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
}
