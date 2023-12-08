import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import UpcomingCard2 from "./UpcomingCard2";

const UpcomingList = ({ title, sliderTitle }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchUncomingMovies();
  }, []);

  const fetchUncomingMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "ko-KR",
            page: 1,
          },
        }
      );

      const moviesWithImages = await Promise.all(
        response.data.results.map(async (movie) => {
          const imageResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=fcdcf37d8779f435786606a2ddd02898`
          );
          const imageData = await imageResponse.json();
          const image = imageData.backdrops[0]?.file_path || "";
          return { ...movie, image };
        })
      );

      setMovies(moviesWithImages);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const w = window.innerWidth;
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: w <= 1700 ? (w <= 1500 ? 3 : 3.7) : 4.5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const sliderSettings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: w <= 1700 ? (w <= 1500 ? 2.3 : 2.8) : 3.5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  // const sliderSettings3 = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: w <= 1700 ? (w <= 1500 ? 1.2 : 1.5) : 1.8,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  // };

  return (
    <SUpcomingList>
      <h1>{title}</h1>
      {/* <Slider {...sliderSettings3}>
        {movies.map((it) => (
          <UpcomingCard1 it={it} />
        ))}
      </Slider> */}
      {sliderTitle.map((it) => (
        <>
          <Slider {...sliderSettings2}>
            {movies.map((it) => (
              <UpcomingCard2 it={it} number={1} />
            ))}
          </Slider>
          <h3 className="sliderTitle">{it}</h3>
          <Slider {...sliderSettings}>
            {movies.map((it) => (
              <div key={it.id} className="UpcomingCard-wrapper">
                <UpcomingCard2 it={it} number={2} />
              </div>
            ))}
          </Slider>
        </>
      ))}
    </SUpcomingList>
  );
};

const SUpcomingList = styled.div`
  color: white;
`;

export default UpcomingList;
