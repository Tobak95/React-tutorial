import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name == "Declan") {
      setName("Saka");
    } else {
      setName("Declan");
    }
  };

  const [num, setNum] = useState(0);
  const handleIncrease = () => {
    setNum(num + 1);
  };

  const handleDecrease = () => {
    setNum(num - 1);
  };

  const details = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          perspiciatis dolores vero qui enim optio sed, officiis
          necessitatibus recusandae modi! Tempora dicta dolore, porro quod
          mollitia a ut exercitationem? Architecto earum error est excepturi
          cupiditate fuga. Ullam tempora sapiente deleniti impedit pariatur
          tempore, vel, error beatae voluptate at itaque.`;

  const [show, setShow] = useState(false);
  const handleShowDetails = () => {
    setShow(!show);

  
  };
  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font bold">UseState 1</h1>
      <p>My name is {name}</p>
      <button onClick={handleNameChange} className="mybtn my-5">
        Change Name
      </button>
      <h1 className="text-4xl my-3">{num}</h1>
      <button onClick={handleIncrease} className="mybtn mx-3">
        Increase
      </button>
      <button onClick={() => setNum(0)} className="mybtn mr-3">
        Reset
      </button>
      <button onClick={handleDecrease} className="mybtn">
        Decrease
      </button>

      <div className="max-w-[600px] mx-auto shadow-lg p-3">
        <h1 className="text-4xl font-bold">Top Football News</h1>
        <h2 className="font-bold text-red my-2 text-2xl">
          Madrid Demolish at te Emirate Stadium
        </h2>
        <p>{show ? details : details.substr(0, 100) + (".....")}</p>
        <button onClick={handleShowDetails} className="mybtn ml-2" >
           {show ? "Show Less" : "Show More"} </button>
      </div>
    </div>
  );
};

export default SimpleState;
