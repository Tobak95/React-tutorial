import React from 'react'
import mycar from "../assets/react cars.webp"
import mycar2 from "../assets/lambo.webp"

const  product = () => {
  return (
    <div>
        <img src={mycar} alt="my-car" />
        <img src={mycar2} alt="myCar-2" />
    </div>
  );
};

export default product;