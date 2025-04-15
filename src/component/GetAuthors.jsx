import React from "react";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import { useFetch } from "../assets/hooks/useFetch";

const url = "https://example-data.draftbit.com/authors?_limit=10";

const GetAuthors = () => {
 const {isLoading, data: authors} = useFetch(url);

  if (isLoading) {
    return (
      <div>
        <RingLoader />
      </div>
    );
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold text-blue-500 flex justify-center">
        List Of Authors
      </h1>

      <section className="flex items-center gap-20 flex-wrap mt-10">
        {authors.map((author, index) => {
          const { imgUrl, person, professions, description, sourceUrl } =
            author;
          return (
            <div
              key={index}
              className="w-[450px] shadow-md "
            >
              <img src={imgUrl} alt={person} className="w-[400px] h-[400px]" />
              <h1>{person}</h1>
              <p>{professions}</p>
              <p>{description}</p>
              <a href={sourceUrl}>Read More</a>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default GetAuthors;
