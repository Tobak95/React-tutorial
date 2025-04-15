import React from "react";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

//product[] --> product(api)

const url = "https://dummyjson.com/products";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      //setIsloading would appear below after whem the If button
      setIsLoading(false);
      setProducts(data.products);
    };
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <PropagateLoader />
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto ">
      <h1 className="text-[40px] font-bold  ">List Of Products</h1>
      <section className="flex items-center gap-5 flex-wrap">
        {products.map((product) => {
          const {
            id,
            title,
            price,
            images,
            stock,
            warrantyInformation,
            rating,
          } = product;
          return (
            <div key={id} className="w-full max-w-[320px] h-[600px] shadow-md ">
              <img
                src={images[0]}
                alt={title}
                className="w-full h-[80%] object-cover "
              />
              <p className="text-xl font-semibold ">{title}</p>
              <div className="flex gap-5">
                <p className="text-2xl font-bold ">${price}</p>
                <p className={stock >= 30 ? "text-green-400" : "text-red-400"}>
                  Left in stock:{stock}
                </p>
              </div>
              <p>{warrantyInformation}</p>
              <p className={rating > 3.5 ? "text-green-500" : "text-red-600"}>
                {rating}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchData;
