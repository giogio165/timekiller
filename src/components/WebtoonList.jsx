import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/css/MovieList.css";
import WebtoonCard from "./WebtoonCard";

const WebtoonList = ({ it, number }) => {
  const [webtoons, setWebtoons] = useState([]);
  useEffect(() => {
    fetchWebtoons();
  }, []);

  const fetchWebtoons = async () => {
    try {
      const response = await axios.get(
        "https://korea-webtoon-api.herokuapp.com/?perPage=10&page=1&service=kakao&updateDay=sun"
      );
      setWebtoons(response.data.webtoons);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: number,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="MovieList">
      <h1>{it}</h1>
      <Slider {...sliderSettings}>
        {webtoons.map((it) => (
          <div key={it.id}>
            <WebtoonCard key={it.id} it={it} number={number} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WebtoonList;
