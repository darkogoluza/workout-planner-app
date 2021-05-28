import React, { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { setOverlayState, addWorkout } from "../actions";
import SliderComponent from "./SliderComponent";

const AddExerciseOverlay = () => {
  const [repsRange, setRepsRange] = useState([10, 10]);
  const [setsRange, setSetsRange] = useState([3, 4]);
  const [timeBetween, setTimeBetween] = useState([1, 2]);
  const [restTime, setRestTime] = useState(2);
  const { currentWorkout } = useSelector((state) => state.overlayReducer);
  const exercises = useSelector((state) => state.exerciesReducer);
  const [currentExercise, setCurrentExercise] = useState(null);
  const [searchedExercises, setSearchedExercises] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const handleAddWorkout = () => {
    const newRepsRange =
      repsRange[0] === repsRange[1] ? [repsRange[0]] : repsRange;
    const newSetsRange =
      setsRange[0] === setsRange[1] ? [setsRange[0]] : setsRange;
    const newTimeBetween =
      timeBetween[0] === timeBetween[1] ? [timeBetween[0]] : timeBetween;

    dispatch(
      addWorkout(currentWorkout, {
        exercise_id: currentExercise.id,
        reps_range: newRepsRange,
        sets_range: newSetsRange,
        rest_time_between_sets: newTimeBetween,
        rest_time: restTime,
      })
    );
    dispatch(setOverlayState(false, null));
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      setSearchedExercises([]);
      return;
    }
    const filterdExercises = exercises.filter((exercise) => {
      return exercise.name.toLowerCase().includes(searchValue);
    });
    setSearchedExercises(
      filterdExercises
        .map((filterdExercise) => {
          return { name: filterdExercise.name, id: filterdExercise.id };
        })
        .slice(0, 6)
    );
  };

  return (
    <section className="bg-gray-300 rounded-3xl w-full h-screen fixed z-10">
      <div className="flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search Exercise..."
          onChange={handleSearch}
          value={searchValue}
          className="w-5/6 p-2 rounded-xl hover:bg-gray-100 bg-white text-gray-900 outline-none focus:ring-4"
        />
      </div>
      <ul className="w-5/6 mx-auto gap-2 grid grid-cols-2 mt-6">
        {searchedExercises.map((searchedExercise) => {
          return (
            <li
              onClick={() => {
                setCurrentExercise({
                  name: searchedExercise.name,
                  id: searchedExercise.id,
                });
                setSearchValue("");
                setSearchedExercises([]);
              }}
              className="p-2 text-xl text-center cursor-pointer hover:bg-gray-200 transition-colors duration-150 bg-white text-gray-600 rounded-xl capitalize"
            >
              {searchedExercise.name}
            </li>
          );
        })}
      </ul>
      {currentExercise !== null && (
        <p className="bg-gray-100 mt-4 rounded-xl text-gray-900 font-bold capitalize text-center p-2 text-2xl w-2/3 mx-auto">
          {currentExercise.name}
        </p>
      )}
      <div className="w-5/6 mx-auto mt-8 space-y-2 text-gray-900">
        <RangeSlider
          value={repsRange}
          setValue={setRepsRange}
          min={1}
          max={100}
          title="Reps Range"
        />
        <RangeSlider
          value={setsRange}
          setValue={setSetsRange}
          min={1}
          max={50}
          title="Sets Range"
        />
        <RangeSlider
          value={timeBetween}
          setValue={setTimeBetween}
          min={1}
          max={15}
          title="Time Between Sets"
        />
        <SliderComponent
          value={restTime}
          min={1}
          max={25}
          title="Rest Time"
          setValue={setRestTime}
        />
      </div>
      <div className="flex justify-evenly mt-8">
        <button
          className={`px-6 py-2 rounded-xl border-2 border-transparent hover:border-red-500 hover:text-red-500 hover:bg-transparent transition-all duration-150 text-xl font-bold tracking-wider bg-red-500 text-white ${
            currentExercise === null
              ? "pointer-events-none opacity-40"
              : "pointer-events-auto opacity-100"
          }`}
          onClick={handleAddWorkout}
        >
          Add
        </button>
        <button
          className="px-6 py-2 rounded-xl border-2 border-transparent hover:border-gray-400 hover:text-gray-500 hover:bg-transparent transition-all duration-150 text-xl font-bold tracking-wider bg-gray-400 text-white"
          onClick={() => {
            dispatch(setOverlayState(false, null));
          }}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default AddExerciseOverlay;
