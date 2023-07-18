import React from "react";

const MovieActor =  ({ actor }) => {
  console.log("actor:", actor);

  return (
    <>
    <img
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
                 />
      <p>Actor: {actor.name} </p>
      <p>Biography: {actor.biography} </p>
    </>
  );
};
export default MovieActor