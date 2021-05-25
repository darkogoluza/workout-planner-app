import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ children, to }) => {
  return (
    <header className="flex relative p-4">
      <Link className="absolute" to={to}>
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
      </Link>
      <h3 className="text-gray-500 text-center text-2xl capitalize mx-auto">
        {children}
      </h3>
    </header>
  );
};

export default PageHeader;
