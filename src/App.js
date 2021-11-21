import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-success">
      <div className="container">
        <a href="#/movie" className="navbar-brand">
          React Movie App
        </a>
      </div>
    </nav>
  );
};

const PopularMovie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=403829fffc80d8184aa974d631a475c5";

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
        setData(results);
      })
      .catch((error) => {
        console.error("Error fetching Data", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
      <div className="my-3">
        <div className="container">
          <h3>Popular</h3>
          <div className="d-flex flex-row flex-nowrap overflow-auto mt-3 customScroll">
            {data.map((dat) => (
              <div key={dat.id} className="me-3" style={{ maxWidth: "250px" }}>
                <Link
                  to={{
                    pathname: `/movie/${dat.id}`,
                    state: { id: data.id } //pass the data so that you can use it via useLocation
                  }}
                >
                  <img
                    className=""
                    src={"https://image.tmdb.org/t/p/w500" + dat.poster_path}
                    alt="movie poster"
                    style={{ maxWidth: "150px", height: "225px" }}
                  />
                  <div className="small text-center">
                    <p className="m-0">{dat.original_title}</p>
                    <p className="">{dat.release_date.substring(0, 4)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <>
      <Nav />
      <PopularMovie />
    </>
  );
}
