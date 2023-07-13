//import PageTemplate from "../components/siteHeader";
import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const Popular = (props) => {
  const { data, error, isLoading, isError } = useQuery("popularActors", getPopularActors);

  console.log(data); //testing returned data - working

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data ? data.results : [];
  console.log("test results",actors); //testing returned data - working
  
// test display details
  return (
    <>
      <h2>Popular Actors:</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
            />
            <h3>{actor.name}</h3>
            <h4>Known For:</h4>
            <ul>
              {actor.known_for.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Popular;