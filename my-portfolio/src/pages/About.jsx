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
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { GiNestBirds, GiDesert } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";// import { projects } from '/home/meelyn-pandit/Documents/cloud-development/meelyn-pandit.github.io/my-portfolio/src/data.js'

export default function About({ color }) {
const projects = [
  {
    title:
      "Anthropogenic noise alters parental beahvior and nestling developmental patterns, but not fledging condition.",
    subtitle: "Dissertation Ch. 1",
    text: "Examined how anthropgenic noise affected parental care behavior and nestling development in Eastern Bluebirds (Sialia sialis)",
    image: "./figure_6_edited.jpg",
    link: "http://dx.doi.org/10.1093/beheco/arab015",
    value: "a",
    icon: <GiNestBirds />,
  },
  {
    title:
      "Environmental conditions lead to shifts in individual communication, which can cause cascading effects on soundscape composition.",
    subtitle: "Dissertation Ch. 2",
    text: "Examined how aridity levels, which increased sound attenuation and led to reduced water resources, affected individual vocal behaviors and ultimately the entire vocal communication system of a population using an agent-based model.",
    image: "./terrgrid_06-19_36.jpg",
    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.9359",
    value: "b",
    icon: <IoIosMusicalNotes />,
  },
  {
    title:
      "It’s not the heat, it’s the aridity: avian song activity and species diversity at the community level have consistent, negative responses to increasing aridity ",
    subtitle: "Dissertation, Ch. 3",
    text: "Examined if aridity affected vocal detectability and if supplemental water alleviated the cost of vocalizing under arid conditions.",
    image: "./pabu_closeup.jpg",
    link: "https://meelyn-pandit.github.io/", // need to create a check back soon link...
    value: "c",
    icon: <GiDesert />,
  },
];
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
          {/* <Text
            color={color}
            fontWeight={800}
            fontSize={'xl'}
          >
            Publications
            <Separator orientation="horizontal" />
          </Text>
          <AccordionCustom
            items={projects}
            color={color}
            /> */}
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