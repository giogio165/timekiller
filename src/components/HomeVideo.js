import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HomeVideo = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchMovies();
    fetchVideo();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "en-US",
            page: 1,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const fetchVideo = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/569094/videos",
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "en-US",
          },
        }
      );

      if (response.data.results && response.data.results.length > 0) {
        setVideo(response.data.results[0]);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const w = window.innerWidth;
  return (
    <SHomeVideo>
      <h1 className="HomeVideo__home">{title}</h1>
      <div className="HomeVideo__video">
        {video ? (
          <iframe
            width={w <= 1500 ? "1050" : "1400"}
            height="500"
            src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1`}
            title="Video"
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
    font-size: 50px;
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
