import React, { useState } from "react";
import { GlobalLayout } from "../global";
import MovieList from "../components/MovieList";
import MovieList2 from "../components/MovieList2";
import TvList from "../components/TvList";
import HomeVideo from "../components/HomeVideo";
import styled from "styled-components";
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
        <MemoizedHomeVideo title={"홈"} />
        <MemoizedMovieList2 />
        <Button
          className={`Home__button${showWholeButton ? "Clicked" : ""}`}
          onClick={wholeClickHandler}
        >
          전체
        </Button>
        <Button
          className={`Home__button${movieButton ? "Clicked" : ""}`}
          onClick={movieClickHandler}
        >
          영화
        </Button>
        <Button
          className={`Home__button${tvButton ? "Clicked" : ""}`}
          onClick={tvClickHandler}
        >
          TV 시리즈
        </Button>
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

const MemoizedHomeVideo = React.memo(HomeVideo);
const MemoizedMovieList2 = React.memo(MovieList2);

const Button = styled.button`
  border: 2px solid rgb(132, 134, 141);
  border-radius: 24px;
  background-color: black;
  color: rgb(132, 134, 141);
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  margin: 0 8px 0 8px;

  &.Home__buttonClicked {
    border: 2px solid white;
    background-color: white;
    color: black;
  }
`;

export default MainPage;
