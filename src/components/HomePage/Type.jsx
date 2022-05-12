import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
    <Typewriter
      options={{
        strings: [
          "React Developer",
          "Frontend Engineer",
          "MERN Stack Developer",
          "Manual & Automation Tester",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
