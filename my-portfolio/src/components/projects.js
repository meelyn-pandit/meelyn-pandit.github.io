import React from "react";
import {
  Box, Flex, Heading, Text, Link, Wrap, WrapItem, Tag, chakra,
} from "@chakra-ui/react";
import { BookHalf, Cpu } from "react-bootstrap-icons";
import { projects, researchProjects } from "../data";

const BookIcon = chakra(BookHalf);
const CpuIcon = chakra(Cpu);

function TechTags({ tags }) {
  return (
    <Wrap spacing={2} mt={4}>
      {tags.map((tag) => (
        <WrapItem key={tag}>
          <Tag size="sm" bg="gray.800" color="brand.300" borderRadius="full" px={3}>
            {tag}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
}

// Research cards may or may not link out; render an anchor only when a link exists.
function ResearchCard({ item }) {
  const inner = (
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
      <Text letterSpacing="widest" fontSize="sm" fontWeight="medium" color="brand.400" mb={1}>
        {item.subtitle}
      </Text>
      <Heading as="h2" fontSize="lg" fontWeight="medium" color="white" mb={3}>
        {item.title}
      </Heading>
      <Text lineHeight="relaxed">{item.description}</Text>
      <TechTags tags={item.tags} />
    </Box>
  );

  if (!item.link) {
    return <Box w={{ base: "full", lg: "1/2" }} p={4}>{inner}</Box>;
  }
  return (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      w={{ base: "full", lg: "1/2" }}
      p={4}
      _hover={{ textDecoration: "none" }}
      role="group">
      {inner}
    </Link>
  );
}

export default function Projects() {
  return (
    <Box as="section" id="projects" color="gray.400" bg="gray.900">
      <Box maxW={{ lg: "5xl" }} mx="auto" px={5} py={10} textAlign="center">
        {/* Software engineering projects */}
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

        {/* Research & computational science */}
        <Flex direction="column" w="full" mt={24} mb={20}>
          <CpuIcon mx="auto" boxSize={10} mb={4} />
          <Heading as="h1" size={{ base: "lg", sm: "xl" }} mb={4} fontWeight="medium" color="white">
            Research &amp; Computational Science
          </Heading>
          <Text maxW={{ lg: "2xl" }} mx="auto" lineHeight="relaxed">
            Ph.D. research applying agent-based modeling, machine learning, and
            time-series methods to large-scale ecological and acoustic data.
          </Text>
        </Flex>
        <Flex wrap="wrap" m={-4}>
          {researchProjects.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
