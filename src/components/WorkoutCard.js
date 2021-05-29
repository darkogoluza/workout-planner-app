import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import calculateTotalWorkoutTime from "../utils/calculateTotalWorkoutTime";
import WorkoutCardWrapper from "./WorkoutCardWrapper";
import WorkoutCardIcons from "./WorkoutCardIcons";

const WorkoutCard = ({ workout_id, other, index }) => {
  const workouts = useSelector((state) => state.workoutsReducer);

  const weeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const mainContentRef = useRef(null);
  const secundaryContentRef = useRef(null);
  const cardRef = useRef(null);

  const getCardHeight = () => {
    if (mainContentRef.current === null) return "0px";
    if (isOpen) {
      return (
        mainContentRef.current?.offsetHeight +
        secundaryContentRef.current?.offsetHeight
      );
    } else {
      return `${mainContentRef.current?.offsetHeight}px`;
    }
  };

  const handleInfoClick = () => {
    setIsOpen(!isOpen);
  };

  const handleAdjustClick = () => {};

  useEffect(() => {
    setIsOpen(false);
  }, [mainContentRef]);

  useEffect(() => {
    if (cardRef.current === null) return;
    cardRef.current.style.height = mainContentRef.current.offsetHeight + "px";
  }, []);

  if (other === "rest") {
    return (
      <WorkoutCardWrapper index={index}>
        <WorkoutCardIcons onAdjustClick={handleAdjustClick} />
        <div ref={mainContentRef} className="capitalize p-4 text-center">
          <h3 className="text-gray-500">{weeks[index]}</h3>
          <h1 className="text-gray-900 text-4xl">Rest Day</h1>
        </div>
      </WorkoutCardWrapper>
    );
  } else if (other === "active_rest") {
    return (
      <WorkoutCardWrapper index={index}>
        <WorkoutCardIcons onAdjustClick={handleAdjustClick} />
        <div ref={mainContentRef} className="capitalize p-4 text-center">
          <h3 className="text-gray-500">{weeks[index]}</h3>
          <h1 className="text-gray-900 text-4xl">Active Rest Day</h1>
        </div>
      </WorkoutCardWrapper>
    );
  } else if (workout_id !== null) {
    const { name, exercises } = workouts.find(
      (workout) => workout.id === workout_id
    );

    return (
      <WorkoutCardWrapper
        refProp={cardRef}
        index={index}
        height={getCardHeight()}
      >
        <WorkoutCardIcons
          onInfoClick={handleInfoClick}
          onAdjustClick={handleAdjustClick}
        />
        <div ref={mainContentRef} className={`capitalize p-4 text-center`}>
          <h3 className="text-gray-500">{weeks[index]}</h3>
          <h1 className="text-gray-900 text-4xl">{name} Day</h1>
        </div>
        <div ref={secundaryContentRef} className="w-full">
          <h4 className="text-gray-500 text-center">
            Exercises: <span className="text-gray-900">{exercises.length}</span>
          </h4>
          <h4 className="text-gray-500 text-center">
            Duration:{" "}
            <span className="text-gray-900">
              {calculateTotalWorkoutTime(exercises).toFixed(2)} min
            </span>
          </h4>
          <div className="p-4 space-y-2 flex flex-col justify-center">
            <Link
              className="px-4 py-2 bg-red-500 rounded-lg text-gray-100 border-2 hover:text-red-500 hover:bg-transparent transition-all duration-150 hover:border-red-500  text-center"
              to={`/workout/${workout_id}`}
            >
              Learn More
            </Link>
            <button
              className="px-4 py-2 bg-gray-400 rounded-lg text-gray-100 border-2 hover:text-gray-500 hover:bg-transparent transition-all duration-150 hover:border-gray-400"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </WorkoutCardWrapper>
    );
  }
};

export default WorkoutCard;
