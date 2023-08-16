import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";

const ContentsInfo = (props) => {
  const [genreNames, setGenreNames] = useState([]);
  const [movieRuntime, setMovieRuntime] = useState("");
  const [episodes, setEpisodes] = useState("");
  const real = useSelector((state) => {
    return state.contentUpdate.value;
  });
  console.log(real);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQ4MGY5NTM0MDFkYjYwZTU1M2U0MTI4NGY1ZjQwNyIsInN1YiI6IjYzNjBmZGI4NDBkMGZlMDA4MjY3ZjUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tfm55H9d6vX72r5ZgVUk2HlkmK15hVNdfCiP7NkgWnQ",
    },
  };
  console.log(props);

  const fetchGenreName = async (genreCode) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list`,
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "ko-KR",
          },
        }
      );

      const matchingGenres = response.data.genres.filter((genre) =>
        genreCode.includes(genre.id)
      );

      const limitedGenres = matchingGenres.slice(0, 2);

      const genreNames = limitedGenres.map((genre) => genre.name);
      setGenreNames(genreNames);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const fetchMovieDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}?language=ko-KR`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error:", error);
      return null;
    }
  };
  const fetchTvDetail = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${props.id}?language=ko-KR`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error:", error);
      return null;
    }
  };
  useEffect(() => {
    fetchGenreName(props.real.genre_ids);
    const fetchDetails = async () => {
      const movieDetail = await fetchMovieDetail();
      if (movieDetail) {
        console.log(movieRuntime);
        setMovieRuntime(movieDetail);
      }
    };
    const fetchTvDetails = async () => {
      const tvDetail = await fetchTvDetail();
      if (tvDetail) {
        setEpisodes(tvDetail);
      }
    };

    fetchDetails();
    fetchTvDetails();
  }, [props.real.genre_ids]);

  return (
    <SContentsInfo>
      {props.real && (
        <section type="portrait" className="container-info">
          <div type="portrait" className="container-info_img">
            <img
              alt="노팅힐"
              src={`https://image.tmdb.org/t/p/w500${props.real.poster_path}`}
            />
          </div>
          <div className="contents-info">
            <h1>
              {props.real.hasOwnProperty("title")
                ? props.real.title
                : props.real.name}
            </h1>
            <p className="contents-info_p1">
              <span>
                <label>{genreNames[0]}</label>
                <label>
                  {genreNames.length >= 2 ? " · " + genreNames[1] : ""}
                </label>{" "}
                ·{" "}
                <span>
                  {props.real.name !== undefined &&
                  props.real.name === episodes.name
                    ? episodes?.episode_run_time[0] + "화 "
                    : movieRuntime.runtime + "분 "}
                </span>
                ·{" "}
                <span className="contents-info_score">
                  {Math.round(props.real.vote_average * 10) / 10}점
                </span>
              </span>
              <span className="separator"></span>
              <span>
                <span className="age">{props.real.adult ? 19 : 12}</span>
              </span>
            </p>
            <p className="contents-info_p2">{props.real.overview}</p>
          </div>
        </section>
      )}
    </SContentsInfo>
  );
};

export default ContentsInfo;

const SContentsInfo = styled.div`
  position: relative;
  z-index: 2;

  .container-info {
    display: flex;
    align-items: flex-start;
    max-width: 1680px;
    padding-bottom: 30px;
    padding-right: 40px;
    padding-left: 40px;
    margin: 50px auto 0;

    .container-info_img {
      display: inline-block;
      position: relative;
      vertical-align: top;
      width: 169px;
      height: 247px;
      border-radius: 4px;
      object-fit: cover;
      margin: 0 40px 0 0;
      overflow: hidden;

      img {
        vertical-align: top;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-style: none;
        overflow-clip-margin: content-box;
        overflow: clip;
      }
    }

    .contents-info {
      display: flex;
      flex: 1 1 0%;
      flex-direction: column;

      h1 {
        position: relative;
        top: 4px;
        font-size: 64px;
        font-weight: 900;
        line-height: 81px;
        font-family: Roboto, "Noto Sans KR", "Apple SD Gothic Neo",
          "Nanum Gothic", "Malgun Gothic", sans-serif;
        margin-top: 5px;
        margin-bottom: 10px;
      }

      .contents-info_p1 {
        display: flex;
        align-items: center;
        color: rgb(186, 186, 193);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        white-space: pre;
        margin: 10px 0px 0px;

        label {
          outline: #000;
        }
        .contents-info_score {
          color: rgb(255, 255, 255);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0px;
          line-height: 20px;
        }
        .separator {
          background: rgba(255, 255, 255, 0.2);
          width: 1px;
          height: 13px;
          margin: 0px 15px;
        }
        .age {
          display: inline-flex;
          align-items: center;
          background: rgb(46, 47, 49);
          color: rgb(255, 255, 255);
          font-size: 12px;
          font-weight: 800;
          vertical-align: top;
          line-height: 18px;
          height: 20px;
          padding: 1px 5px;
          border-radius: 3px;
          margin: 0px 13px 0px 0px;
        }
      }
      .contents-info_p2 {
        color: rgb(186, 186, 193);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        max-width: 600px;
        margin: 10px 0px 0px;
        overflow: hidden;
      }
    }
  }
`;
