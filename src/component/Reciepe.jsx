import React from "react";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { useFetch } from "../assets/hooks/useFetch";

const Reciepe = () => {
  const {
    data: { recipes },
    isLoading,
  } = useFetch("https://dummyjson.com/recipes");

  if (isLoading) {
    return (
      <div>
        <SyncLoader />
      </div>
    );
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="font-bold text-2xl text-blue-500 text-center">
        Name : Recipes
      </h1>
      <section className="flex flex-col gap-15 items-center">
        {recipes.map((recipes) => {
          const {
            id,
            name,
            image,
            ingredients,
            instructions,
            prepTimeMinutes,
          } = recipes;
          return (
            <div key={id} className=" w-full">
              <h1 className="font-bold text-[20px] ">{name}</h1>
              <img src={image} alt={name} className="w-[600px] h-[550px]" />
              <p className="underline text-xl font-bold py-5">
                Preparation Time: {prepTimeMinutes} Minutes
              </p>
              <div>
                <h1 className="text-2xl font-bold text-blue-500">
                  Ingredients
                </h1>
                <ol className="list-decimal">
                  {ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>;
                  })}
                </ol>

                <div>
                  <h1 className="text-2xl font-bold text-blue-500 mt-4 ">
                    How to Prepare
                  </h1>

                  {instructions.map((instruction, index) => {
                    return <li key={index}>{instruction}</li>;
                  })}
                  <div>
                    <button
                      onClick={() => setPress(true)}
                      className="mybtn mt-4"
                    >
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

//className="h-[500px] w-[500px] mt-25 rounded-3xl mx-auto border-2 px-5 py-5"
//<h1 className="font-bold text-2xl text-blue-500">Name : Recipes</h1>

export default Reciepe;
