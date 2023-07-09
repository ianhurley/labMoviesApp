import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieActors } from "../../api/tmdb-api";
//import { excerpt } from "../../util";

const styles = {
  table: {
    minWidth: 550,
  },
};

export default function MovieActors({ movie }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieActors(movie.id).then((actors) => {
        console.log("Fetched actors:", actors);
        setActors(actors);
      
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Current actors state:", actors);

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="actors table">
        <TableHead>
          <TableRow>
            <TableCell >Actor</TableCell>
            <TableCell align="center">Character</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {actors.map((a) => (
            <TableRow key={a.id}>
              <TableCell component="th" scope="row">
                {a.name}
              </TableCell>
              <TableCell >
                {a.character}
                </TableCell>
              <TableCell >
                <Link to="/bio">
                  Link to Bio
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}