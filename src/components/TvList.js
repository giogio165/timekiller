import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="MovieList">
      <h3>{it}</h3>

      <Slider {...sliderSettings}>
        {tvShows.map((it) => (
          <TvCard it={it} key={it.id} />
        ))}
      </Slider>
    </div>
  );
};

export default TvList;
