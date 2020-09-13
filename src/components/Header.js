import React from "react";

export default () => {
  return (
    <header className="container px-4 mx-auto py-4">
      <div className="flex flex-row justify-between items-center">
        <div className="logo flex flex-row items-center">
          <img
            src="/images/full-logo.svg"
            width="180"
            className="cursor-pointer"
            alt="LEAD"
          />
        </div>
        <div className="cursor-pointer">
          <img src="/images/hamburgar.svg" width="40" alt="hamburgar" />
        </div>
      </div>
    </header>
  );
};
