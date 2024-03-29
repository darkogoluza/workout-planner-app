import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";

const ExercisePage = () => {
  const exercise = useSelector((state) => state.exerciesReducer);
  const { id } = useParams();
  const currentWorkout = localStorage.getItem("current_workout");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (exercise.length > 0) {
    const {
      name,
      mechanics,
      type,
      force,
      positive,
      negative,
      target_muscles,
      assisting_muscles,
      execution,
    } = exercise[id];
    return (
      <main>
        <PageHeader to={currentWorkout ? `/workout/${currentWorkout}` : "/"}>
          Exercise
        </PageHeader>
        <PageTitle>{name}</PageTitle>
        <section className="text-center mt-8">
          <h4 className="text-gray-500 capitalize">
            Mechanics: <span className="text-gray-900">{mechanics}</span>
          </h4>
          <h4 className="text-gray-500 capitalize">
            Type: <span className="text-gray-900">{type}</span>
          </h4>
          <h4 className="text-gray-500 capitalize">
            Force: <span className="text-gray-900">{force}</span>
          </h4>
        </section>

        <section className="bg-gray-200 h-24 w-full mt-4 rounded-xl shadow-md felx flex justify-evenly items-center">
          <div className="text-center">
            <h2 className="text-4xl text-gray-500">Concentric</h2>
            <h4 className="capitalize text-gray-900">{positive}</h4>
          </div>
          <div className="text-center">
            <h2 className="text-4xl text-gray-500">Eccentric</h2>
            <h4 className="capitalize text-gray-900">{negative}</h4>
          </div>
        </section>
        <section className="mt-8 text-center">
          <h2 className="text-4xl text-red-400">Muscle Activation</h2>
          <h3 className="text-2xl mt-4 text-gray-900">Target</h3>
          <ul>
            {target_muscles.map((muscle, index) => {
              return (
                <li className="text-gray-600" key={index}>
                  {muscle}
                </li>
              );
            })}
          </ul>
          <h3 className="text-2xl mt-2 text-gray-900">Assisted</h3>
          <ul>
            {assisting_muscles.map((muscle, index) => {
              return (
                <li className="text-gray-600" key={index}>
                  {muscle}
                </li>
              );
            })}
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-gray-900 text-4xl text-center mt-8">Execution</h2>
          <p className="text-gray-600 mt-2 px-4 mx-auto tracking-wide text-center">
            {execution}
          </p>
        </section>
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default ExercisePage;
