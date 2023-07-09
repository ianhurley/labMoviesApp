import PageTemplate from "../components/templateMovieListPage";
import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const Popular = (props) => {
  const { data, error, isLoading, isError } = useQuery("popularActors", getPopularActors);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data ? data.results : [];

  return (
    <PageTemplate
      title="Popular Actors"
      movies={actors}
    />
  );
};

export default Popular;