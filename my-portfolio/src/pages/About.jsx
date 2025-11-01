import React from "react";
import {
  Separator,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react"

export default function About({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 14 }}
          pb= {{ base: 20, md: 36 }}
        >
          <Stack align="left" direction="row" px={4}>
            <HStack mx={4}>
              {/* <Text color={`${color}.400`} fontWeight={800}>
                <h1>Meelyn Mayank Pandit</h1>
              </Text> */}
              <Text 
                fontWeight={800}
                textStyle="xl"
                color={"whiteAlpha.950"}>About</Text>
            </HStack>
          </Stack>
          <Text
            color={"whiteAlpha.950"}
            fontSize={"xl"}
            px={4}
          >
            <Separator orientation="horizontal" />
            {/* <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> */}
            I am a former field biologist and ornithologist turned software developer and data scientist.
            <br></br>
                        <br></br>

            I focus on delivering effective products in a timely manner and solving client issues.
            <br></br>
            <br></br>
            In my free time, I enjoy reading, tennis, tinkering with electronics (Arduinos, Raspberry Pi's, etc.), and 3D printing.
            <Text
              color={"whiteAlpha.950"}
              fontSize={"xl"}
              px={4}
              fontWeight={800}
            >
              <br></br>
              Education
            </Text>
            <Separator orientation="horizontal" />

              <br />Ph.D. in Biology, University of Oklahoma,
              <br className="hidden lg:inline-block"/>M.S. in Integrative Biology, Oklahoma State University,
              <br className="hidden lg:inline-block"/>B.S. in Biology, Indiana University
            {/* </h2> */}
          </Text>
        </Stack>
      </Container>
    </>
    // <section id="about">
    //   <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    //       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
    //         Meelyn Mayank Pandit
    //         <br />Ph.D. in Biology, University of Oklahoma,
    //         <br className="hidden lg:inline-block"/>M.S. in Integrative Biology, Oklahoma State University,
    //         <br className="hidden lg:inline-block"/>B.S. in Biology, Indiana University
    //       </h1>
    //       {/* <p className="mb-8 leading-relaxed"> */}

    //         <br className="hidden lg:inline-block" />If you are interested in my work, check out my published papers below:
    //       {/* </p> */}
    //       <div className="flex justify-center">
    //         <a
    //           href="#contact"
    //           className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
    //           Current Work
    //         </a>
    //         <a
    //           href="#projects"
    //           className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
    //           Past Work
    //         </a>
    //       </div>
    //     </div>
    //     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    //       <img
    //         className="object-cover object-center rounded"
    //         alt="hero"
    //         src="./IMG_2345.jpg"
    //         // src="./coding.svg"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}