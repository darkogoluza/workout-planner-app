import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ExerciseCard from "../components/ExerciseCard";
import PageTitle from "../components/PageTitle";
import PageHeader from "../components/PageHeader";
import calculateTotalWorkoutTime from "../utils/calculateTotalWorkoutTime";

const WorkoutPage = () => {
  const workouts = useSelector((state) => state.workoutsReducer);
  const exercisesData = useSelector((state) => state.exerciesReducer);
  let { id: currentWorkout } = useParams();
  currentWorkout = parseInt(currentWorkout);

  if (workouts.length > 0) {
    const { name, exercises } = workouts[currentWorkout];
    return (
      <main>
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
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default WorkoutPage;
