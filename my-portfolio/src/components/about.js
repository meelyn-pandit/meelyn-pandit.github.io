import React from "react";
import { Box, Flex, Heading, Text, Link, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="section" id="about">
      <Flex
        maxW="6xl"
        mx="auto"
        px={10}
        py={20}
        direction={{ base: "column", md: "row" }}
        align="center">
        <Flex
          flex={{ lg: 1 }}
          w={{ md: "1/2" }}
          pr={{ md: 16, lg: 24 }}
          direction="column"
          align={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: 16, md: 0 }}>
          <Heading as="h1" size={{ base: "lg", sm: "xl" }} mb={4} fontWeight="medium" color="white">
            Meelyn Mayank Pandit
            <br />Full-Stack Software Engineer
          </Heading>
          <Text mb={8} lineHeight="relaxed">
            Building production data pipelines, APIs, and full-stack applications.
            <br />
            Ph.D. in Biology (University of Oklahoma) bringing a research-grade
            rigor to data engineering and scientific computing.
          </Text>
          <Flex justify="center">
            <Link
              href="#projects"
              display="inline-flex"
              color="white"
              bg="brand.500"
              py={2}
              px={6}
              borderRadius="md"
              fontSize="lg"
              _hover={{ bg: "brand.600", textDecoration: "none" }}>
              Projects
            </Link>
            <Link
              href="#contact"
              ml={4}
              display="inline-flex"
              color="gray.400"
              bg="gray.800"
              py={2}
              px={6}
              borderRadius="md"
              fontSize="lg"
              _hover={{ bg: "gray.700", color: "white", textDecoration: "none" }}>
              Contact Me
            </Link>
          </Flex>
        </Flex>
        <Box maxW={{ lg: "lg" }} w={{ base: "5/6", md: "1/2" }}>
          <Image objectFit="cover" objectPosition="center" borderRadius="md" alt="hero" src="./IMG_2345.jpg" />
        </Box>
      </Flex>
    </Box>
  );
}
