import React from "react";
import MyStoreSingleProduct from "./MyStoreSingleProduct";

const LastView = () => {
  const lastViewed = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/8169973/1.jpg?3267",
      title: "Agustable Water Heater",
      price: 5099,
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill      (white)/product/18/5658304/1.jpg?8195",
      title: "Rechargable Household Fan",
      price: 35099,
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/9035043/1.jpg?3500",
      title: "mini 4 digital Combination",
      price: 16000,
    },
    {
      id: 4,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1403404/1.jpg?6206",
      title: "Two Pieces of 2.5m LED",
      price: 5600,
    },
    {
      id: 5,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/391977/1.jpg?9530",
        title: "Hisense 50kg Top load",
        price: 170599
    },
  ];
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="">
        <h1 className="text-black bg-white  text-3xl">Last Viewed</h1>
      </div>
      <section className="flex gap-2 items-center flex-wrap">
    {
        lastViewed.map((product) =>{
            return <MyStoreSingleProduct key={product.id} {...product} />
        })
    }

      </section>
    </div>
  );
};

export default LastView;
