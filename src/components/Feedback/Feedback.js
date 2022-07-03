import React from "react";

const Feedback = ({ label, value }) => {
  return (
    <div className="absolute right-2 top-32 sm:top-20 bg-emerald-900 text-white p-4 rounded-lg transition-all">
      <p className="font-bold">{label === "REM" ? `Copied: ${value} rem` : `Copied: ${value} px`}</p>
    </div>
  );
};

export default Feedback;
