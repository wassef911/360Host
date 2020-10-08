import React from "react";

const SpinBall = require("react-spinkit");

function Spinner() {
  return (
    <div className="spinner">
      <SpinBall name="ball-clip-rotate-multiple" />
    </div>
  );
}

export default Spinner;
