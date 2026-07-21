// src/components/Navbar.js
import React from "react";
import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { ArrowRightSquareFill } from "react-bootstrap-icons";

// react-router's NavLink adds a class of "active" to the matching route,
// which we style via the `&.active` selector.
const navLinkSx = { "&.active": { color: "white" } };

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
        <Link
          as={RouterNavLink}
          to="/"
          end
          fontWeight="medium"
          color="white"
          fontSize="xl"
          mb={{ base: 4, md: 0 }}>
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
          <Link as={RouterNavLink} to="/projects" sx={navLinkSx} _hover={{ color: "white" }}>Projects</Link>
          <Link as={RouterNavLink} to="/skills" sx={navLinkSx} _hover={{ color: "white" }}>Skills</Link>
          <Link as={RouterNavLink} to="/publications" sx={navLinkSx} _hover={{ color: "white" }}>Publications</Link>
        </HStack>
        <Link
          as={RouterNavLink}
          to="/contact"
          display="inline-flex"
          alignItems="center"
          bg="gray.800"
          py={1}
          px={3}
          borderRadius="md"
          mt={{ base: 4, md: 0 }}
          sx={navLinkSx}
          _hover={{ bg: "gray.700", textDecoration: "none" }}>
          Contact Me
          <ArrowRightSquareFill style={{ width: 16, height: 16, marginLeft: 4 }} />
        </Link>
      </Flex>
    </Box>
  );
}
