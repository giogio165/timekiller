import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WebtoonCard from "./WebtoonCard";
import styled from "styled-components";
import { fetchWebtoons } from "../api/Webtoon";

const WebtoonList = ({ it, number }) => {
  const [webtoons, setWebtoons] = useState([]);
  useEffect(() => {
    fetchWebtoons()
      .then((response) => setWebtoons(response))
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

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
    <SWebtoonList>
      {webtoons && <h2 className="WebtoonList__title">{it}</h2>}
      <Slider {...sliderSettings}>
        {webtoons &&
          webtoons.map((it) => (
            <div key={it.id}>
              <WebtoonCard key={it.id} it={it} number={number} />
            </div>
          ))}
      </Slider>
    </SWebtoonList>
  );
};

const SWebtoonList = styled.div`
  color: white;
  width: 100%;
  > h2 {
    margin-top: 25px;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;
export default WebtoonList;
