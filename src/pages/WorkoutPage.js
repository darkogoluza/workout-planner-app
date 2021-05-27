import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ExerciseCard from "../components/ExerciseCard";
import PageTitle from "../components/PageTitle";
import PageHeader from "../components/PageHeader";
import calculateTotalWorkoutTime from "../utils/calculateTotalWorkoutTime";
import AddExerciseOverlay from "../components/AddExerciseOverlay";
import { setOverlayState } from "../actions";

const WorkoutPage = () => {
  const workouts = useSelector((state) => state.workoutsReducer);
  const exercisesData = useSelector((state) => state.exerciesReducer);
  const { isOpen: isOverlayOpen } = useSelector(
    (state) => state.overlayReducer
  );
  let { id: currentWorkout } = useParams();
  currentWorkout = parseInt(currentWorkout);
  const dispatch = useDispatch();

  if (workouts.length > 0) {
    const { name, exercises } = workouts[currentWorkout];
    return (
      <main>
        {isOverlayOpen && <AddExerciseOverlay />}
        <PageHeader to="/workout-plan">Workout</PageHeader>
        <PageTitle>{name}</PageTitle>
        <h3 className="text-gray-500 text-center text-xl mt-4">
          Total Duration:{" "}
          <span className="text-gray-900">
            {calculateTotalWorkoutTime(exercises).toFixed(2)} min
          </span>
        </h3>
        <ul className="space-y-4 mt-8 mb-16">
          {exercises.map(
            (
              {
                id,
                exercise_id,
                reps_range,
                sets_range,
                rest_time_between_sets,
                rest_time,
              },
              index
            ) => {
              const { name, execution, positive, negative } =
                exercisesData.find((exercise) => exercise.id === exercise_id);
              const isLast = index === exercises.length - 1;
              return (
                <ExerciseCard
                  key={id}
                  {...{
                    reps_range,
                    sets_range,
                    rest_time_between_sets,
                    rest_time,
                    name,
                    execution,
                    isLast,
                    positive,
                    negative,
                    exercise_id,
                    workout_id: currentWorkout,
                  }}
                />
              );
            }
          )}
        </ul>
        <div className="mb-16 px-4">
          <button
            onClick={() => {
              dispatch(setOverlayState(true, currentWorkout));
            }}
            className=" bg-red-500 w-full text-white px-4 py-2 font-bold tracking-wider rounded-lg hover:bg-transparent hover:text-red-500 border-2 border-transparent hover:border-red-500 transition-all duration-200"
          >
            Add Exercise
          </button>
        </div>
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default WorkoutPage;
