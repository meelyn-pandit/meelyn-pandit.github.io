// import { CodeIcon } from "@heroicons/react/solid";
import {useState} from "react";
import { BookHalf } from "react-bootstrap-icons"
import AccordionCustom from "../components/ui/accordion.jsx";
import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { GiNestBirds, GiDesert } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import {
  Separator,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  // Accordion,
  // Span,
} from "@chakra-ui/react";
// import { projects } from "../src/data.js"

export default function Projects(props) {
  const color = props.color
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
    <Stack textAlign={"left"}>
      <Text color={color} fontWeight={800} fontSize={"xl"}>
        Publications
        <Separator orientation="horizontal" />
      </Text>
      <AccordionCustom items={projects} color={color} />
    </Stack>
  );
}