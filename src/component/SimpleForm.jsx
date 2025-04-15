import React from "react";
import { useState } from "react";

//controlled input - set up state values for all inpur field
//value... the value would be passed to the inputs
//next would be the changing of the state value when the input is changed,... eventhandler
const SimpleForm = () => {
const [firstname, setFirstName] = useState("");
const [lastname, setLastName] = useState("");

//First rules of creating a form is to preventdefault to prevent the page from reloading
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form ">
        <h1 className="text-2xl font-medium">Submit Name</h1>
        <input type="text" placeholder="First Name" className="input" value={firstname}
        onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Last Name" className="input" value={lastname}
        onChange={(e) => setLastName(e.target.value)}/>
        <button type="submit" className="mybtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
