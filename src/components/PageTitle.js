import React from "react";

const PageTitle = ({ children }) => {
  return (
    <h1 className="text-center px-4 text-6xl capitalize text-red-500 font-semibold tracking-wide">
      {children}
    </h1>
  );
};

export default PageTitle;
