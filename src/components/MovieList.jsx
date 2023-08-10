import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import "./temp.css";

const MovieList = ({ it }) => {
  const [movies, setMovies] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7, // Adjust this value to control the number of items displayed
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "en-US",
            page: 1,
          },
        }
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="MovieList">
      <h3>{it}</h3>
      <div className="carousel">
        <Carousel responsive={responsive}>
          {movies.map((item) => (
            <MovieCard item={item} key={item.id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieList;
