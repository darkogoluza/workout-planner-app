import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeExerciseFromWorkout } from "../actions";

const ExerciseCard = ({
  name,
  reps_range,
  sets_range,
  rest_time_between_sets,
  rest_time,
  execution,
  positive,
  negative,
  exercise_id,
  workout_id,
  isLast,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mainContentRef = useRef(null);
  const secundaryContentRef = useRef(null);
  const cardRef = useRef(null);
  const dispatch = useDispatch();

  const calculateTotalExersiceTime = () => {
    const avgRestTime =
      rest_time_between_sets.reduce((acc, current) => acc + current, 0) /
      rest_time_between_sets.length;
    const avgRepsRange =
      reps_range.reduce((acc, current) => acc + current, 0) / reps_range.length;
    const avgSetsRange =
      sets_range.reduce((acc, current) => acc + current, 0) / sets_range.length;
    return (
      avgRestTime * (avgSetsRange - 1) + avgRepsRange * 0.025 * avgSetsRange
    );
  };

  useEffect(() => {
    setIsOpen(false);
  }, [mainContentRef]);

  useEffect(() => {
    cardRef.current.style.height = mainContentRef.current.offsetHeight + "px";
  }, []);

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

  const handleRemoveExercise = () => {
    dispatch(removeExerciseFromWorkout(workout_id, exercise_id));
  };

  return (
    <li className="w-full">
      <div
        className={`bg-gray-200 shadow-md rounded-xl w-full relative overflow-hidden transition-all duration-300 
        `}
        style={{ height: getCardHeight() }}
        ref={cardRef}
      >
        <div className="absolute right-4 flex top-2 space-x-2 cursor-pointer">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 stroke-current hover:text-gray-900 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div onClick={handleRemoveExercise}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current text-gray-500 cursor-pointer hover:text-red-500 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div ref={mainContentRef} className="p-2">
          <h2 className="text-gray-900 text-center text-2xl capitalize">
            {name}
          </h2>
          <div className="text-xs mt-2 tracking-wide">
            <h4 className="text-gray-500 text-center">
              {reps_range.length > 1 ? "Reps Range:" : "Reps:"}
              <span className="text-gray-900"> {reps_range.join("-")}</span>
            </h4>
            <h4 className="text-gray-500 text-center">
              {sets_range.length > 1 ? "Sets Range:" : "Sets:"}
              <span className="text-gray-900"> {sets_range.join("-")}</span>
            </h4>
            <h4 className="text-gray-500 text-center">
              Rest Between Sets:
              <span className="text-gray-900">
                {" "}
                {rest_time_between_sets.map((time) => `${time}min`).join(" - ")}
              </span>
            </h4>
            <h4 className="text-gray-500 text-center">
              Total Estimated Time:
              <span className="text-gray-900">
                {" "}
                {calculateTotalExersiceTime().toFixed(2)} min
              </span>
            </h4>
          </div>
        </div>

        <div ref={secundaryContentRef}>
          <section className="p-4">
            <h2 className="text-gray-900 text-2xl text-center">Execution</h2>
            <p className="text-gray-600 text-sm pt-2 mx-auto tracking-wide text-center">
              {execution}
            </p>
          </section>
          <section className="flex justify-evenly pt-2 pb-6 ">
            <h4 className="text-gray-500 capitalize">
              Concentric: <span className="text-gray-900">{positive}</span>
            </h4>
            <h4 className="text-gray-500 capitalize">
              Eccentric: <span className="text-gray-900">{negative}</span>
            </h4>
          </section>
          <div className="p-4 space-y-2 flex flex-col justify-center">
            <Link
              className="px-4 py-2 bg-red-500 rounded-lg text-gray-100 border-2 hover:text-red-500 hover:bg-transparent transition-all duration-150 hover:border-red-500  text-center"
              to={`/exercise/${exercise_id}`}
              onClick={() => {
                localStorage.setItem("current_workout", workout_id);
              }}
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
      </div>
      {!isLast && (
        <>
          <h4 className="text-gray-500 text-center mt-2">
            Rest:
            <span className="text-gray-900"> {rest_time}min</span>
          </h4>
          <svg
            className="w-6 h-6 stroke-current text-gray-400 relative transform -translate-x-1/2 inset-x-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </>
      )}
    </li>
  );
};

export default ExerciseCard;
