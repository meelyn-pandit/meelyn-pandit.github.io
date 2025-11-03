import { useState } from "react";
import {
  Separator,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  // Accordion,
  // Span,
} from "@chakra-ui/react"
import AccordionCustom from '../components/ui/accordion.jsx'
import { projects } from '/home/meelyn-pandit/Documents/cloud-development/meelyn-pandit.github.io/my-portfolio/src/data.js'

export default function About({ color }) {

  console.log('projects', projects)
  const [items, setItems] = useState(projects)
  const [value, setValue] = useState(() => items.map((c) => c.value))

  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"left"}
          spacing={{ base: 8, md: 14 }}
          pb= {{ base: 20, md: 36 }}
        >
          {/* <Stack 
            align="left" 
            direction="row" px={4}
          > */}
            {/* <HStack mx={4}> */}
              {/* <Text color={`${color}.400`} fontWeight={800}>
                <h1>Meelyn Mayank Pandit</h1>
              </Text> */}
              <Text 
                fontWeight={800}
                textStyle="xl"
                color={color}>About</Text>
            {/* </HStack> */}
          {/* </Stack> */}
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
              color={color}
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
        <Stack
          textAlign={"left"}>
          <Text
            color={color}
            fontWeight={800}
            fontSize={'xl'}
          >
            Publications
            <Separator orientation="horizontal" />
          </Text>
          <AccordionCustom
            items={projects}
            />
          {/* <Accordion.Root
            collapsible 
            defaultValue={[]}
            multiple={false}
            onValueChange={(e) => {
              console.log('on value change e', e)
              setValue(e.value)
              console.log('new value change e', e)
            }}
            // onFocusChange={(newIndex) => setAccordionIndex(newIndex)}
          >
            {items.map((item, index) => (
              <Accordion.Item
                key={index}
                value={item.value}
              >
                {console.log('item value', item.value)}
                <Accordion.ItemTrigger>
                  <Span
                    flex="1"
                    color={color}>
                    {item.title}
                  </Span>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody
                  color={color}>
                  {item.text}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
              </Accordion.Item>
            ))}

          </Accordion.Root> */}
        </Stack>
      </Container>
    </>
  );
}