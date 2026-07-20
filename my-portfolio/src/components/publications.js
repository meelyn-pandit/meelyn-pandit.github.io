// src/components/publications.js
import React from "react";
import { Box, Flex, Heading, Text, Link, chakra } from "@chakra-ui/react";
import { BookHalf } from "react-bootstrap-icons";
import { publications } from "../data";

const BookIcon = chakra(BookHalf);

export default function Publications() {
  return (
    <Box as="section" id="publications" color="gray.400" bg="gray.900">
      <Box maxW={{ lg: "3xl" }} mx="auto" px={5} py={10} textAlign="center">
        <Flex direction="column" w="full" mb={12}>
          <BookIcon mx="auto" boxSize={10} mb={4} />
          <Heading as="h1" size={{ base: "lg", sm: "xl" }} mb={4} fontWeight="medium" color="white">
            Published Research
          </Heading>
          <Text maxW={{ lg: "2xl" }} mx="auto" lineHeight="relaxed">
            Peer-reviewed publications from my Ph.D. research on anthropogenic
            noise, climate, and avian behavior.
          </Text>
        </Flex>
        <Flex direction="column" m={-2}>
          {publications.map((pub) => (
            <Link
              href={pub.link}
              key={pub.title}
              p={4}
              textAlign="left"
              borderTop="1px solid"
              borderColor="gray.800"
              _hover={{ bg: "gray.800", textDecoration: "none" }}
              transition="background-color 0.2s">
              <Text letterSpacing="widest" fontSize="sm" fontWeight="medium" color="brand.400" mb={1}>
                {pub.subtitle}
              </Text>
              <Heading as="h2" fontSize="lg" fontWeight="medium" color="white" mb={2}>
                {pub.title}
              </Heading>
              <Text lineHeight="relaxed">{pub.description}</Text>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
