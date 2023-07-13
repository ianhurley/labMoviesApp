import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieActor from "../components/movieActor";

const MovieActorPage = (props) => {
  const { state : {movie, actor } } = useLocation()
  return (
    <PageTemplate movie={movie}>
      <MovieActor actor={actor} />
    </PageTemplate>
  );
};

export default MovieActorPage;