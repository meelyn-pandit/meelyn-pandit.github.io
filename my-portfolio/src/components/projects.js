import React from "react";
import { Box, Flex, Heading, Text, Link, chakra } from "@chakra-ui/react";
import { BookHalf } from "react-bootstrap-icons";
import { projects } from "../data";

const BookIcon = chakra(BookHalf);

export default function Projects() {
  return (
    <Box as="section" id="projects" color="gray.400" bg="gray.900">
      <Box maxW={{ lg: "5xl" }} mx="auto" px={5} py={10} textAlign="center">
        <Flex direction="column" w="full" mb={20}>
          <BookIcon mx="auto" boxSize={10} mb={4} />
          <Heading as="h1" size={{ base: "lg", sm: "xl" }} mb={4} fontWeight="medium" color="white">
            Full-stack software engineer building production data pipelines, APIs, and self-service applications.
          </Heading>
          <Text maxW={{ lg: "2xl" }} mx="auto" lineHeight="relaxed">
            A few things I've built recently:
          </Text>
        </Flex>
        <Flex wrap="wrap" m={-4}>
          {projects.map((project) => (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              w={{ base: "full", lg: "1/2" }}
              p={4}
              _hover={{ textDecoration: "none" }}
              role="group">
              <Box
                px={8}
                py={10}
                w="full"
                h="full"
                border="4px solid"
                borderColor="gray.800"
                bg="gray.900"
                transition="border-color 0.2s"
                _groupHover={{ borderColor: "brand.400" }}>
                <Text
                  letterSpacing="widest"
                  fontSize="sm"
                  fontWeight="medium"
                  color="brand.400"
                  mb={1}>
                  {project.subtitle}
                </Text>
                <Heading as="h2" fontSize="lg" fontWeight="medium" color="white" mb={3}>
                  {project.title}
                </Heading>
                <Text lineHeight="relaxed">{project.description}</Text>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
