import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const addReview = (movie, review) => {   // NEW
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToMustWatch = (movie) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      updatedMustWatch.push(movie.id);
    }
    setMustWatch(updatedMustWatch);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
