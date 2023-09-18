import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieInfoButton from "../MovieInfoButton";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const UpcomingCard = ({ it, number }) => {
  const navigate = useNavigate();

  const gotoDetailPage = () => {
    navigate(`/detail/${it.id}`);
  };

  const cardClassName = number === 2 ? "UpcomingCard" : "UpcomingCard2";
  const cardPosterClassName =
    number === 2 ? "UpcomingCard-poster" : "UpcomingCard-poster2";

  return (
    <div>
      {number === 1 ? (
        <SUpComingCard1 onClick={gotoDetailPage}>
          <SMovieInfo>
            <div className="movie-title">{it.original_title}</div>
            <div className="UpcomingCard-overview">{it.overview}</div>
          </SMovieInfo>
          <SUpComingCardImgWrapper1>
            {/* <div className="UpcomingCard1__overlay "></div> */}
            <img
              src={`https://image.tmdb.org/t/p/w500${it.poster_path}`}
              alt={`${it.original_title} Poster`}
              style={{
                position: "relative",
                width: "412px",
                height: "200px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
            />
          </SUpComingCardImgWrapper1>
          <SPurchaseTag>개별구매</SPurchaseTag>
          {/*개별구매가 안보임 */}
        </SUpComingCard1>
      ) : (
        <SUpcomingCard2 onClick={gotoDetailPage}>
          <SUpComingCardImgWrapper2>
            <img
              src={`https://image.tmdb.org/t/p/w500${it.backdrop_path}`}
              alt={`${it.original_title} Poster`}
              className={cardPosterClassName}
              style={{
                position: "relative",
                width: "284px",
                height: "160px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
            />
            <div className="UpcomingCard2__overlay">
              <div className="movie-info">
                <MovieInfoButton />
                <h3 className="movie-title">{it.original_title}</h3>
                <div>
                  예상
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
                  {it.vote_average}
                </div>
                <div>개봉일{it.release_date}</div>
              </div>
            </div>
          </SUpComingCardImgWrapper2>
        </SUpcomingCard2>
      )}
    </div>
  );
};

export default UpcomingCard;

const SUpComingCard1 = styled.div`
  margin: 20px 0 0 0;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    .UpcomingCard1__overlay {
      display: flex;
      opacity: 1;
    }
  }
`;

const SMovieInfo = styled.div`
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .UpcomingCard-overview {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SUpComingCardImgWrapper1 = styled.div`
  position: relative;
  border-radius: 8px;
  z-index: 1;
  .UpcomingCard1__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 421px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 8px;
  }
`;

const SPurchaseTag = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  top: 100px;
  left: 100px;
  width: 45px;
  height: 15px;
  color: black;
  background-color: white;
  border-radius: 3px;
  z-index: 2;
`;

const SUpcomingCard2 = styled.div`
  position: relative;
  margin: 20px 0 20px 0;
  cursor: pointer;
  &:hover {
    .UpcomingCard2__overlay {
      display: flex;
      opacity: 1;
    }
  }
`;

const SUpComingCardImgWrapper2 = styled.div`
  position: relative;
  border-radius: 8px;
  z-index: 1;
  .UpcomingCard2__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 284px;
    height: 160px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 8px;
    .movie-info {
      font-size: 13px;
      margin-left: 10px;
      margin-bottom: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .movie-title {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
