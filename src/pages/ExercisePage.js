import React from "react";
import { useSelector } from "react-redux";

const ExercisePage = () => {
  const exercise = useSelector((state) => state.exerciesReducer);

  console.log(exercise[0]);
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
    } = exercise[0];
    return (
      <>
        <header className="flex relative p-4">
          <button className="absolute ">
            <svg
              className="w-10 h-10 fill-current text-gray-500 hover:text-gray-600 transition duration-150 ease-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h3 className="text-gray-500 text-center text-2xl capitalize mx-auto">
            Exercise
          </h3>
        </header>
        <h1 className="text-center text-6xl capitalize text-red-500 font-semibold tracking-wide">
          {name}
        </h1>
        <section className="space-y-2 text-center mt-8">
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
            <h2 className="text-4xl text-gray-500">Positive</h2>
            <h4 className="capitalize text-gray-900">{positive}</h4>
          </div>
          <div className="text-center">
            <h2 className="text-4xl text-gray-500">Negative</h2>
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
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default ExercisePage;
