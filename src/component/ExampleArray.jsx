import React from "react";
import { useState } from "react";

const films = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jZPa4KAsvUZzXoHfMXfaFhhFHzqu0Llgsg&s",
    title: "Mission Impossible 1",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UCLFEAz3-Kl1nPIXp2bKekKc8SnUWdIQLw&s",
    title: "Die Hard",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIT-QqtB5tOu8YzD20smKKiw46xgpA-k7Mw&s",
    title: "Mortal Combat",
  },
];

const ExampleArray = () => {
  const [movies, setMovies] = useState([]);

  if (movies.length === 0) {
    return (
      <div className="w-full max-auto my-4 p-2.5 text-center shadow-2xl">
        <h1>No MOVIES FOUND</h1>
        <button onClick={() => setMovies(films)} className="mybtn">Get Movies</button>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="font-bold text-2xl mx-auto text-center">Movies Avaliable</h1>
      <section className="flex gap-20 mt-5 px-50">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="">
              <img src={movie.image} alt="" className="w-[300px] h-[250px]"  />
              <p className="font-bold text-xl">{movie.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ExampleArray;
