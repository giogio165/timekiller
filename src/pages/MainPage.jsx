import React, { useState } from "react";
import { GlobalLayout } from "../global";
import MainPageVideo from "../components/MainPageVideo";
import MovieList from "../components/MovieList";
import MovieList2 from "../components/MovieList2";
import TvList from "../components/TvList";

const MainPage = () => {
  const [movieButton, setMovieButton] = useState(false);
  const [showWholeButton, setShowWholeButton] = useState(true);
  const [tvButton, setTvButton] = useState(false);

  const wholeClickHandler = () => {
    setMovieButton(false);
    setShowWholeButton(true);
    setTvButton(false);
  };
  const movieClickHandler = () => {
    setMovieButton(true);
    setShowWholeButton(false);
    setTvButton(false);
  };
  const tvClickHandler = () => {
    setMovieButton(false);
    setShowWholeButton(false);
    setTvButton(true);
  };

  const sliderTitle = [
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
        <button
          className={`Home__button${showWholeButton ? "Clicked" : ""}`}
          onClick={wholeClickHandler}
        >
          전체
        </button>
        <button
          className={`Home__button${movieButton ? "Clicked" : ""}`}
          onClick={movieClickHandler}
        >
          영화
        </button>
        <button
          className={`Home__button${tvButton ? "Clicked" : ""}`}
          onClick={tvClickHandler}
        >
          TV 시리즈
        </button>

        {movieButton
          ? sliderTitle.map((it, idx) => <MovieList it={it} key={idx} />)
          : ""}
        {tvButton
          ? sliderTitle.map((it, idx) => <TvList it={it} key={idx} />)
          : ""}
        {showWholeButton
          ? sliderTitle.map((it) => (
              <>
                <MovieList it={it} />
                <TvList it={it} />
              </>
            ))
          : ""}
      </div>
    </GlobalLayout>
  );
};

export default MainPage;
