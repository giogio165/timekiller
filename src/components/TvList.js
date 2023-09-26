import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TvCard from "./TvCard";
import styled from "styled-components";
import { fetchTvShows } from "../api/TvApi";

const TvList = ({ it }) => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetchTvShows()
      .then((response) => setTvShows(response))
      .catch((error) => console.error("API Error:", error));
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth <= 1500 ? 5 : 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <STvList>
      <h2 className="MovieList__title">{it}</h2>
      <Slider {...sliderSettings}>
        {tvShows.map((it) => (
          <div key={it.id}>
            <TvCard it={it} />
          </div>
        ))}
      </Slider>
    </STvList>
  );
};

const STvList = styled.div`
  color: white;
  width: 100%;
  > h2 {
    margin-top: 10px;
  }
`;
export default TvList;
