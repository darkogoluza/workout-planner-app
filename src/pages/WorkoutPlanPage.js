import React from "react";
import PageTitle from "../components/PageTitle";
import { useSelector } from "react-redux";
import WorkoutCard from "../components/WorkoutCard";
import PageHeader from "../components/PageHeader";

const WorkoutPlanPage = () => {
  const workoutsPlan = useSelector((state) => state.workoutsPlanReducer);

  if (workoutsPlan.length > 0) {
    const { name, workouts } = workoutsPlan[0];
    return (
      <main>
        <PageHeader to="/">Workout Plan</PageHeader>
        <PageTitle>{name}</PageTitle>
        <ul className="space-y-8 mt-16 mb-16">
          {workouts.map((workout, index) => {
            return <WorkoutCard key={workout.id} {...workout} index={index} />;
          })}
        </ul>
      </main>
    );
  }
};

export default WorkoutPlanPage;
