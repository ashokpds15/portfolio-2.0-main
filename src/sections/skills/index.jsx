import React from "react";
import AnimatedSkillSvg from "../../assets/animated_svg.jsx";
import { BsTriangleFill } from "react-icons/bs";
import IconRow from "./iconRow.jsx";

export default function SkillSection() {
  const skills = [
    "Building RESTful APIs in Express",
    "Building responsive Single Page Apps in React.js",
    "Buildind visually appealing responsive website",
  ];
  return (
    <div className="section" id="skills">
      <h1 className="text-center text-2xl font-bold text-teal-500 capitalize mb-4">
        what i am good at ?
      </h1>
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="w-[400px] overflow-hidden">
          <AnimatedSkillSvg />
        </div>
        <div className="md:w-6/12 flex flex-col items-center gap-4">
          <h1 className="capitalize font-bold text-xl text-slate-500 dark:text-teal-500">
            Semi-Stack development
          </h1>
          <IconRow />
          <ul>
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 mb-2">
                <BsTriangleFill
                  size={16}
                  stroke="2.5px"
                  className="text-teal-500 transform rotate-90"
                />
                <span className="text-lg text-slate-700 dark:text-slate-300">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
