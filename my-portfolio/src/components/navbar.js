// src/components/Navbar.js
import React from "react";
import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { ArrowRightSquareFill } from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <Box as="header" bg="gray.800" position={{ md: "sticky" }} top="0" zIndex={10}>
      <Flex
        maxW="6xl"
        mx="auto"
        px={5}
        py={5}
        wrap="wrap"
        direction={{ base: "column", md: "row" }}
        align="center">
        <Link href="#about" fontWeight="medium" color="white" fontSize="xl" mb={{ base: 4, md: 0 }}>
          Home
        </Link>
        <HStack
          as="nav"
          spacing={5}
          ml={{ md: 4 }}
          mr={{ md: "auto" }}
          py={{ md: 1 }}
          pl={{ md: 4 }}
          borderLeft={{ md: "1px solid" }}
          borderColor={{ md: "gray.700" }}
          wrap="wrap"
          justify="center"
          fontSize="base">
          <Link href="#projects" _hover={{ color: "white" }}>Projects</Link>
          <Link href="#skills" _hover={{ color: "white" }}>Skills</Link>
          <Link href="#publications" _hover={{ color: "white" }}>Publications</Link>
          <Link href="#research-interests" _hover={{ color: "white" }}>Research Background</Link>
        </HStack>
        <Link
          href="#contact"
          display="inline-flex"
          alignItems="center"
          bg="gray.800"
          py={1}
          px={3}
          borderRadius="md"
          mt={{ base: 4, md: 0 }}
          _hover={{ bg: "gray.700", textDecoration: "none" }}>
          Contact Me
          <ArrowRightSquareFill style={{ width: 16, height: 16, marginLeft: 4 }} />
        </Link>
      </Flex>
    </Box>
  );
}
