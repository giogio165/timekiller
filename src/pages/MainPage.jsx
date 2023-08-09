import React from "react";
import { GlobalLayout } from "../global";
import MainPageVideo from "../components/MainPageVideo";
import MovieList from "../components/MovieList";
import MovieList2 from "../components/MovieList2";

const MainPage = () => {
  const movieSlider = [
    "왓차 최고인기작",
    "왓차 익스클루시브",
    "설탕이 필요할 때 꺼내보세요",
    "왓차 Top 10",
    "오직 왓챠에서",
  ];
  return (
    <GlobalLayout>
      <div className="Home">
        <MainPageVideo />
        <MovieList2 />
        {movieSlider.map((it) => (
          <MovieList it={it} />
        ))}
      </div>
    </GlobalLayout>
  );
};

export default MainPage;
