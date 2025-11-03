// src/components/Skills.js
import { PatchCheckFill, CpuFill } from "react-bootstrap-icons"
// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import AccordionCustom from '../components/ui/accordion.jsx'

import { skills } from "../data.js";

export default function Skills(props) {
  const { color } = props
  return (
  <AccordionCustom
    items={skills}
    color={color}
  />
  );
}