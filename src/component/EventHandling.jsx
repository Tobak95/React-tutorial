import React from "react";

const EventHandling = () => {
  const handleclick = () => {
    alert("Welcome User");
  };
  const handleClickAgain = (name) => {
    alert(`welcome ${name}`);
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl mb-4">RESPONDING TO USER INTERACTION</h1>
      <button onClick={handleclick} className="mybtn">
        Click Me
      </button>

      <button onClick={() => handleClickAgain("John")} className="mybtn ml-3">Click Again</button>
    </div>
  );
};

export default EventHandling;
