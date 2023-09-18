import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { fetchMovies } from "../api/MovieApi";
import { fetchVideosForMovie } from "../api/VideoApi";

const HomeVideo = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [videos, setVideos] = useState(null);
  const w = window.innerWidth;

  useEffect(() => {
    fetchMovies()
      .then((movieData) => {
        setMovies(movieData);

        const selectedMovie = movieData[0];

        fetchVideosForMovie(selectedMovie.id).then((videoData) => {
          setVideos(videoData[0]);
        });
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <SHomeVideo>
      <h1 className="HomeVideo__home">{title}</h1>
      <div className="HomeVideo__video">
        {videos ? (
          <iframe
            width={w <= 1500 ? "100%" : "100%"}
            height="500"
            src={`https://www.youtube.com/embed/${videos.key}?autoplay=1&mute=1`}
            title={videos.name}
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        ) : (
          "Loading video..."
        )}
      </div>
      <div className="HomeVideo__text">
        <div className="HomeVideo__title">
          {movies.length > 0 ? movies[0].title : ""}
        </div>
        <div className="HomeVideo__overview">
          {movies.length > 0 ? movies[0].overview : ""}
        </div>
      </div>
    </SHomeVideo>
  );
};
const SHomeVideo = styled.div`
  position: relative;
  .HomeVideo__text {
    width: 100%;
    height: 120px;
    position: absolute;
    bottom: 0px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    margin: 0;
  }
  .HomeVideo__title {
    color: white;
    font-weight: 700;
    font-size: 30px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .HomeVideo__overview {
    width: 800px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 20px;
  }
`;
export default HomeVideo;
