import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeVideo = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState(null);
  console.log(movies[0].id);

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
    <div className="HomeVideo">
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
    </div>
  );
};

export default HomeVideo;
