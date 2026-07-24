import React from "react";
import { Box, Flex, Heading, Text, Link, Image, chakra } from "@chakra-ui/react";
import { BookHalf } from "react-bootstrap-icons";
import { projects, dataScience } from "../data";

const BookIcon = chakra(BookHalf);

// Field imagery that corresponds to the data-science work (shown in the
// right-hand column beside the project list).
const dataScienceImages = [
  {
    src: "./sswma_landscape.JPEG",
    alt: "Arid grassland study landscape",
    caption:
      "Arid study landscape — the environmental gradient behind the aridity, soundscape, and time-series analyses.",
  },
  {
    src: "./pabu_singing.jpg",
    alt: "A bird vocalizing in the field",
    caption:
      "A study subject vocalizing — the raw acoustic signal behind the detection and modeling work.",
  },
];

// Card for the software-engineering group: bordered box in a 2-up grid.
function SoftwareCard({ project }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      w={{ base: "full", lg: "1/2" }}
      p={4}
      _hover={{ textDecoration: "none" }}
      role="group">
      <Box
        px={8}
        py={10}
        w="full"
        h="full"
        textAlign="left"
        border="4px solid"
        borderColor="gray.800"
        bg="gray.900"
        transition="border-color 0.2s"
        _groupHover={{ borderColor: "brand.400" }}>
        <Text letterSpacing="widest" fontSize="sm" fontWeight="medium" color="brand.400" mb={1}>
          {project.subtitle}
        </Text>
        <Heading as="h3" fontSize="lg" fontWeight="medium" color="white" mb={3}>
          {project.title}
        </Heading>
        <Text lineHeight="relaxed">{project.description}</Text>
      </Box>
    </Link>
  );
}

// Card for the data-science group: stacked list row; links out when a link exists.
function DataScienceCard({ item }) {
  const body = (
    <>
      <Text letterSpacing="widest" fontSize="sm" fontWeight="medium" color="brand.400" mb={1}>
        {item.subtitle}
      </Text>
      <Heading as="h3" fontSize="lg" fontWeight="medium" color="white" mb={2}>
        {item.title}
      </Heading>
      <Text lineHeight="relaxed">{item.description}</Text>
    </>
  );
  const common = {
    p: 4,
    textAlign: "left",
    borderTop: "1px solid",
    borderColor: "gray.800",
  };
  return item.link ? (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      {...common}
      _hover={{ bg: "gray.800", textDecoration: "none" }}
      transition="background-color 0.2s">
      {body}
    </Link>
  ) : (
    <Box {...common}>{body}</Box>
  );
}

export default function Projects() {
  return (
    <Box as="section" id="projects" color="gray.400" bg="gray.900">
      <Box maxW={{ lg: "5xl" }} mx="auto" px={5} py={10} textAlign="center">
        {/* Main section header */}
        <Flex direction="column" w="full" mb={16}>
          <BookIcon mx="auto" boxSize={10} mb={4} />
          <Heading as="h1" size={{ base: "lg", sm: "xl" }} fontWeight="medium" color="white">
            Projects
          </Heading>
        </Flex>

        {/* Sub-group: Software Engineering */}
        <Box mb={24}>
          <Heading as="h2" size="lg" fontWeight="medium" color="white" mb={3}>
            Software Engineering
          </Heading>
          <Text maxW={{ lg: "2xl" }} mx="auto" lineHeight="relaxed" mb={10}>
            Full-stack software engineer building production data pipelines,
            APIs, and self-service applications.
          </Text>
          <Flex wrap="wrap" m={-4}>
            {projects.map((project) => (
              <SoftwareCard key={project.title} project={project} />
            ))}
          </Flex>
        </Box>

        {/* Sub-group: Data Science and Visualization */}
        <Box id="data-science">
          <Heading as="h2" size="lg" fontWeight="medium" color="white" mb={3}>
            Data Science and Visualization
          </Heading>
          <Text maxW={{ lg: "2xl" }} mx="auto" lineHeight="relaxed" mb={10}>
            Turning large, messy scientific datasets into models and clear
            visualizations — from agent-based simulations and machine learning
            to time-series and statistical analysis, grounded in peer-reviewed
            Ph.D. research.
          </Text>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, lg: 12 }}
            align="flex-start"
            maxW={{ lg: "5xl" }}
            mx="auto"
            textAlign="left">
            {/* Left column: project list */}
            <Flex direction="column" flex="1" w="full">
              {dataScience.map((item) => (
                <DataScienceCard key={item.title} item={item} />
              ))}
            </Flex>
            {/* Right column: corresponding media */}
            <Flex direction="column" flex="1" w="full" gap={6} pt={{ lg: 4 }}>
              {/* Agent-based model animation */}
              <Box>
                <Box
                  as="video"
                  src="./contemporary_timelapse.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Agent-based model animation of soundscape dynamics"
                  borderRadius="md"
                  w="full"
                  maxH="72"
                  objectFit="cover"
                  bg="black"
                />
                <Text fontSize="sm" color="gray.500" mt={2} lineHeight="short">
                  Agent-based model output — simulated soundscape dynamics under
                  changing aridity.
                </Text>
              </Box>
              {dataScienceImages.map((img) => (
                <Box key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    borderRadius="md"
                    w="full"
                    maxH="72"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <Text fontSize="sm" color="gray.500" mt={2} lineHeight="short">
                    {img.caption}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
