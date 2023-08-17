import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SearchCard = ({ info }) => {
  const type = info.media_type;
  return (
    <>
      {info && (
        <SCard>
          <Link to={`/detail/${info.id}`} className="link-result">
            <div className="info-container">
              <div
                className={
                  type === "person" ? "img-container2" : "img-container"
                }
              >
                <img
                  src={
                    info.media_type === "person"
                      ? info.profile_path != null
                        ? `https://image.tmdb.org/t/p/w500${info.profile_path}`
                        : "https://an2-mars.amz.wtchn.net/assets/aio_person_thumbnail-294cb5e0a2ea9b9893eb622092baae586e2371571ab2d5912b0ded11a1aa0655.png"
                      : info.poster_path != null
                      ? `https://image.tmdb.org/t/p/w500${info.poster_path}`
                      : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
                  }
                  alt="no image"
                />
              </div>
              <div className="info">
                <div className="title">
                  {info.media_type !== "person"
                    ? info.media_type !== "tv"
                      ? `${info.title}`
                      : `${info.name}`
                    : `${info.name}`}
                </div>
                {info.release_date && (
                  <div className="name">
                    {info.media_type !== "person"
                      ? `${info.media_type} · ${info.release_date.substring(
                          0,
                          4
                        )}`
                      : ""}
                  </div>
                )}
              </div>
            </div>
          </Link>
        </SCard>
      )}
    </>
  );
};

export default SearchCard;

const SCard = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .link-result {
    flex: 1 1 0%;
    display: flex;
    position: relative;
    align-items: center;
    padding: 8px 0px;
    cursor: pointer;
    outline: #000;
    text-decoration: none;
    color: #fff;
    background-color: transparent;

    .info-container {
      display: flex;
      position: relative;
      flex: 1 1 0%;
      align-items: center;
      overflow: hidden;

      .img-container {
        display: flex;
        position: relative;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        width: 48px;
        margin-right: 14px;
        overflow: hidden;
        height: 70px;
        border-radius: 4px;

        img {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .img-container2 {
        display: flex;
        position: relative;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        width: 48px;
        margin-right: 14px;
        overflow: hidden;
        height: 48px;
        border-radius: 50%;

        img {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        overflow: hidden;

        .title {
          color: rgb(255, 255, 255);
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 22px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .name {
          color: rgb(132, 134, 141);
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 18px;
          white-space: nowrap;
          margin-top: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
