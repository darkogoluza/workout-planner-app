import React from "react";
import getDayOfTheWeekIndex from "../utils/getDayOfTheWeekIndex";

const WorkoutCardWrapper = ({ children, index, refProp, onClick, height }) => {
  return (
    <li
      ref={refProp}
      onClick={onClick}
      className={`w-full h-24 overflow-hidden bg-gray-200 relative ${
        getDayOfTheWeekIndex() === index && "border-red-500 border-2"
      } shadow-lg rounded-lg transition-all duration-300`}
      style={{ height: height }}
    >
      {children}
    </li>
  );
};

export default WorkoutCardWrapper;
