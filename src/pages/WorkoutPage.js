import React from "react";
import { useSelector } from "react-redux";
import ExerciseCard from "../components/ExerciseCard";

const WorkoutPage = () => {
  const workouts = useSelector((state) => state.workoutReducer);
  const exercisesData = useSelector((state) => state.exerciesReducer);

  if (workouts.length > 0) {
    const { name, exercises } = workouts[0];
    return (
      <main>
        <h3 className="text-xl text-gray-500 text-center p-4">
          Workout Planner
        </h3>
        <h1 className="capitalize text-4xl text-red-500 text-center tracking-wide font-semibold">
          {name}
        </h1>
        <ul className="space-y-4 mt-8">
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
                  }}
                />
              );
            }
          )}
        </ul>
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default WorkoutPage;
