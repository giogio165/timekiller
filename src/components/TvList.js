import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../components/css/MovieList.css";
import TvCard from "./TvCard";

const TvList = ({ it }) => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetchTvShows();
  }, []);

  const fetchTvShows = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular",
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "en-US",
            page: 1,
          },
        }
      );

      setTvShows(response.data.results);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="MovieList">
      <h3>{it}</h3>

      <div className="carousel">
        {tvShows.map((it) => (
          <TvCard it={it} key={it.id} />
        ))}
      </div>
    </div>
  );
};

export default TvList;
