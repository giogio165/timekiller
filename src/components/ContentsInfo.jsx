import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { fetchMovieDetail } from "../api/MovieApi";
import { fetchTvDetail } from "../api/TvApi";

const ContentsInfo = (props) => {
  const [genreNames, setGenreNames] = useState([]);
  const [movieRuntime, setMovieRuntime] = useState("");
  const [episodes, setEpisodes] = useState("");

  const findGenres = useCallback(() => {
    let genresArray;

    if (movieRuntime.genres && movieRuntime.genres.length > 0) {
      genresArray = movieRuntime.genres.map((genre) => genre.name);
    } else if (episodes.genres && episodes.genres.length > 0) {
      genresArray = episodes.genres.map((genre) => genre.name);
    } else {
      genresArray = [];
    }

    setGenreNames(genresArray.join(", "));
  }, [movieRuntime, episodes]);

  useEffect(() => {
    const fetchDetails = async () => {
      const movieDetail = await fetchMovieDetail(props.id);
      if (movieDetail) {
        setMovieRuntime(movieDetail);
      }
    };

    const fetchTvDetails = async () => {
      const tvDetail = await fetchTvDetail(props.id);
      if (tvDetail) {
        setEpisodes(tvDetail);
      }
    };

    fetchDetails();
    fetchTvDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    findGenres();
  }, [props.id, movieRuntime, episodes, findGenres]);

  return (
    <SContentsInfo>
      {props && (
        <section type="portrait" className="container-info">
          <div type="portrait" className="container-info_img">
            <img
              alt={movieRuntime.id}
              src={`https://image.tmdb.org/t/p/w300${props.real.poster_path}`}
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
                <label>{genreNames}</label>
                <span className="contents-info_score">
                  {Math.round(props.real.vote_average * 10) / 10}점
                </span>
              </span>
              <span className="separator"></span>
              <span>
                {/* <span className="age">{props.real.adult ? 19 : 12}</span> */}
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
          margin-right: 5px;
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
