import React from "react";
import { Box, Flex, Heading, Text, Link, Image, chakra } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BookHalf } from "react-bootstrap-icons";
import { projects, dataScience } from "../data";

const BookIcon = chakra(BookHalf);

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

// Text block for a data-science project. The summary routes to (or links out
// to) the project; any journal link is rendered as a separate link beneath it.
function ProjectText({ item }) {
  const summary = (
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
  const linkProps = { display: "block", _hover: { textDecoration: "none" } };
  let summaryEl;
  if (!item.link) {
    summaryEl = <Box>{summary}</Box>;
  } else if (item.link.startsWith("/")) {
    // Internal routes navigate client-side.
    summaryEl = <Link as={RouterLink} to={item.link} {...linkProps}>{summary}</Link>;
  } else {
    summaryEl = (
      <Link href={item.link} target="_blank" rel="noopener noreferrer" {...linkProps}>{summary}</Link>
    );
  }

  return (
    <Box>
      {summaryEl}
      {item.journal && (
        <Link
          href={item.journal.url}
          target="_blank"
          rel="noopener noreferrer"
          display="inline-block"
          mt={3}
          fontSize="sm"
          fontWeight="medium"
          color="brand.400"
          _hover={{ color: "brand.300" }}>
          Read in {item.journal.name} &rarr;
        </Link>
      )}
    </Box>
  );
}

// Image or video that accompanies a data-science project row.
function ProjectMedia({ media }) {
  if (!media) return null;
  // Figures/charts use `fit: "contain"` so they're never cropped; photos/video default to "cover".
  const frame = {
    borderRadius: "md",
    w: "full",
    maxH: "72",
    objectFit: media.fit || "cover",
    bg: media.bg || "black",
  };
  return (
    <Box w="full">
      {media.type === "video" ? (
        <Box
          as="video"
          src={media.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={media.caption}
          {...frame}
        />
      ) : (
        <Image src={media.src} alt={media.alt} objectPosition="center" {...frame} />
      )}
      <Text fontSize="sm" color="gray.500" mt={2} lineHeight="short">
        {media.caption}
      </Text>
    </Box>
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

        {/* Sub-group: Data Science and Visualization — one row per project so
            each description sits beside its own media with clear spacing. */}
        <Box id="data-science">
          <Heading as="h2" size="lg" fontWeight="medium" color="white" mb={3}>
            Data Science and Visualization
          </Heading>
          <Text maxW={{ lg: "2xl" }} mx="auto" lineHeight="relaxed" mb={4}>
            Turning large, messy scientific datasets into models and clear
            visualizations — from agent-based simulations and machine learning
            to time-series and statistical analysis, grounded in peer-reviewed
            Ph.D. research.
          </Text>
          <Flex direction="column" maxW={{ lg: "5xl" }} mx="auto">
            {dataScience.map((item, i) => (
              <Flex
                key={item.title}
                direction={{ base: "column", md: "row" }}
                gap={{ base: 5, md: 10 }}
                align="center"
                textAlign="left"
                py={{ base: 8, md: 12 }}
                borderTop={i === 0 ? undefined : "1px solid"}
                borderColor="gray.800">
                <Box flex="1" w="full">
                  <ProjectText item={item} />
                </Box>
                <Box flex="1" w="full">
                  <ProjectMedia media={item.media} />
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
