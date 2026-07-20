// src/components/Contact.js
import React from "react";
import {
  Box, Flex, Heading, Text, FormControl, FormLabel, Input, Textarea, Button,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box as="section" id="contact" position="relative">
      <Flex maxW="6xl" mx="auto" px={5} py={10} wrap={{ base: "wrap", sm: "nowrap" }}>
        {/* <Box
          w={{ base: "full", md: "1/2", lg: "2/3" }}
          bg="gray.900"
          borderRadius="lg"
          overflow="hidden"
          mr={{ sm: 10 }}
          p={10}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-start"
          position="relative"
        /> */}
        <Box
          as="form"
          name="contact"
          data-netlify="true"
          w={{ base: "full", md: "1/2", lg: "1/3" }}
          display="flex"
          flexDirection="column"
          ml={{ md: "auto" }}
          py={{ md: 8 }}
          mt={{ base: 8, md: 0 }}>
          <Heading as="h2" color="white" size={{ base: "lg", sm: "xl" }} mb={1} fontWeight="medium">
            Contact Me
          </Heading>
          <Text lineHeight="relaxed" mb={5}>
            Have any questions about my work or background? Feel free to contact me below:
          </Text>
          <FormControl mb={4}>
            <FormLabel htmlFor="name" fontSize="sm" color="gray.400" lineHeight="7">Name</FormLabel>
            <Input
              type="text" id="name" name="name" bg="gray.800" border="1px solid" borderColor="gray.700"
              color="gray.100" _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 2px var(--chakra-colors-brand-600)" }}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="email" fontSize="sm" color="gray.400" lineHeight="7">Email</FormLabel>
            <Input
              type="email" id="email" name="email" bg="gray.800" border="1px solid" borderColor="gray.700"
              color="gray.100" _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 2px var(--chakra-colors-brand-600)" }}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="message" fontSize="sm" color="gray.400" lineHeight="7">Message</FormLabel>
            <Textarea
              id="message" name="message" h={32} resize="none" bg="gray.800" border="1px solid" borderColor="gray.700"
              color="gray.100" _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 2px var(--chakra-colors-brand-600)" }}
            />
          </FormControl>
          <Button type="submit" color="white" bg="blue.500" _hover={{ bg: "blue.600" }} fontSize="lg" borderRadius="md">
            Submit
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
