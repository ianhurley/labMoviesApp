import PageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylist from '../components/cardIcons/playlistAdd'

const Trending = (props) => {
  const { data, error, isLoading, isError } = useQuery("trendingMovies", getTrendingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylist movie={movie} />
      }}
    />
  );
};

export default Trending;