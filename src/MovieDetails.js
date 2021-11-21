import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "./App.js";

const MovieDetails = () => {
  let params = useLocation();
  const { id } = params.state.dat;
  const [movieDetails, setMovieDetails] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=403829fffc80d8184aa974d631a475c5`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        const results = data.results;
        console.log(results);
        setMovieDetails(results);
      })
      .catch((error) => {
        console.error("Error fetching Data", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
    </>
  );
};

export default MovieDetails;
