import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "./App.js";

const MovieDetails = () => {
  let params = useLocation();
  const { id } = params.state;
  console.log(id);
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=403829fffc80d8184aa974d631a475c5`;

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        console.log(resJson);
        setMovieDetail(resJson);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(error);
      }
    };
    getMovieDetail();
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error...";

  return (
    <>
      <Nav />
      <img src={"https://image.tmdb.org/t/p/w500" + movieDetail.poster_path} />
      <p>{movieDetail.original_title}</p>
      <p>{movieDetail.overview}</p>
    </>
  );
};

export default MovieDetails;
