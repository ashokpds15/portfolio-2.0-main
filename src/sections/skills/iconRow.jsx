import React from "react";
import skillIcons from "../../data/techIcons";

export default function IconRow() {
  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      {skillIcons.map(({ name, Icon }) => (
        <div
          key={name}
          className="w-16 h-16 p-4 bg-white rounded-full dark:bg-white dark:bg-opacity-10 cursor-pointer"
          title={name}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}
