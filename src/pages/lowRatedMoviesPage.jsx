import PageTemplate from "../components/templateMovieListPage";
import { getLowRatedMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylist from '../components/cardIcons/playlistAdd'

const LowRated = (props) => {
  const { data, error, isLoading, isError } = useQuery("lowRatedMovies", getLowRatedMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Low Rated Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylist movie={movie} />
      }}
    />
  );
};

export default LowRated;