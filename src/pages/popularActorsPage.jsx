import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
  console.log("test results", actors); //testing returned data - working

  // test display details
  return (
    <>
      <Typography component="h2" variant="h3">
        Popular Actors
      </Typography>
      <Grid container spacing={2}>
        {actors.map((actor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={actor.id}>
            <Box component={Paper} p={2}>
              <img
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Typography variant="h5" style={{ marginTop: "8px" }}>
                {actor.name}
              </Typography>
              <Typography variant="h8">Known For:</Typography>
              <ul>
                {actor.known_for.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Popular;