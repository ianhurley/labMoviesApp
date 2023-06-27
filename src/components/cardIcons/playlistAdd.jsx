import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";

const PlaylistAddIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const onUserSelect = (e) => {
        e.preventDefault();
        context.addToMustWatch(movie);
        console.log("Must Watch Movie Added:", movie.title);
        console.log("Must Watch Movies Array:", context.mustWatch);
      };

  return (
    <IconButton aria-label="add to mustwatch" onClick={onUserSelect}>
    <PlaylistIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default  PlaylistAddIcon;