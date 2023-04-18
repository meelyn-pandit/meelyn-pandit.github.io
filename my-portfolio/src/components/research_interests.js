// src/components/Testimonials

import React from "react";
import { BarChartLine, ClipboardDataFill } from "react-bootstrap-icons"
// import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { research_interests } from "../data";

export default function ResearchInterests() {
  return (
    <section id="research interests">
      <div className="container px-5 py-10 mx-auto text-center">
        <BarChartLine className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Research Interests
        </h1>
        <div className="flex flex-wrap m-4">
          {research_interests.map((interest) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <ClipboardDataFill className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{interest.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="interest"
                    src={interest.image}
                    // className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  {/* <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {interest.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {interest.company}
                    </span>
                  </span> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}