import React from "react";  // useState/useEffect redundant 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { getGenres, getCerts } from "../../api/tmdb-api";
//import { useState } from "react";

import { useQuery } from "react-query";
import Spinner from '../spinner'


const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

export default function FilterMoviesCard(props) {
  const { data: genresData, error: genresError, isLoading: genresLoading, isError: genresIsError } = useQuery("genres", getGenres);
  const { data: certsData, error: certsError, isLoading: certsLoading, isError: certsIsError } = useQuery("certs", getCerts);

  //console.log("certsData:", certsData);
  
  if (genresLoading || certsLoading) {
    return <Spinner />;
  }

  if (genresIsError || certsIsError) {
    return <h1>{error.message}</h1>;
  }

  const genres = genresData?.genres || [];
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const certs = certsData?.certifications?.US || [];
  if (certs[0].name !== "All") {
    certs.unshift({ id: "0", name: "All" });
  }

  const handleUserImput = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e, props) => {
    handleUserImput(e, "title", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleUserImput(e, "genre", e.target.value);
  };

  const handleCertChange = (e) => {
    handleUserImput(e, "certification", e.target.value);
  };

  //console.log("certs:", certs);

  return (
    <>
    <Card sx={styles.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterAltIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
      sx={styles.formControl}
      id="filled-search"
      label="Search field"
      type="search"
      value={props.titleFilter}
      variant="filled"
      onChange={handleTextChange}
    />
        <FormControl sx={styles.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
      labelId="genre-label"
      id="genre-select"
      value={props.genreFilter}
      onChange={handleGenreChange}
    >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
          <FormControl sx={styles.formControl}>
            <InputLabel id="cert-label">Certification</InputLabel>
            <Select
              labelId="cert-label"
              id="cert-select"
              value={props.certFilter}
              onChange={handleCertChange}
            >
              {certs.map((cert) => {
                return (
                  <MenuItem key={cert.certification} value={cert.certification}>
                    {cert.certification}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the movies.
          </Typography>
          <FormControl sx={styles.formControl}>
          <InputLabel id="year-label">Year</InputLabel>
        </FormControl>
        </CardContent>
      </Card>
      </>
  );
}
