import React from "react";

const Product = ({ image, price, title, children }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{price}</p>
      {children}
    </div>
  );
};
const PropsChildren = () => {
  return (
    <div>
      <h1>List of avaliable product</h1>
      <div className="flex gap-3">
        <Product
          image={
            "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/beauty.png"
          }
          price={100}
          title={"Bueaty must have"}
        />

        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/5482704/1.jpg?5763"
          }
          price={800}
          title={"Bluetooth smartwatch"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/862203/1.jpg?0343"
          }
          price={500}
          title={"solar Taker"}
        >
          <h1>Black Friday</h1>
        </Product>
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/797234/1.jpg?9713"
          }
          price={75000}
          title={"Hisense 7.5 washing machine "}
        >
          <h1>Flash Sales</h1>
        </Product>
      </div>
    </div>
  );
};

export default PropsChildren;
