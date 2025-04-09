import React from "react";
import { useState } from "react";

const SimpleState2 = () => {
  const [name, setName] = useState("Mayorwa");
  const handleChangedName = () => {
    if (name === "mayorwa") {
         setName("Gbolade");
    } else {
        setName ("mayorwa");
    }
  };

const [num, setNum] = useState(0);



  return (
    <div className="text-center my-5">
      <h1 className="text-4xl">Set-State</h1>
      <p>My name is {name} </p>
      <button onClick={handleChangedName} className="mybtn">Change Name</button>
      
    </div>
  );
};

export default SimpleState2;
