import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RelativeCard = ({ info }) => {
  return (
    <>
      <SRelativeCard>
        <div>
          <Link to={`/detail/${info.id}`} className="img-container">
            <div className="img-container2">
              <div className="img-container3">
                <img
                  src={
                    info.poster_path != null
                      ? `https://image.tmdb.org/t/p/w500${info.poster_path}`
                      : "https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
                  }
                  alt="img"
                />
              </div>
            </div>
          </Link>
        </div>
      </SRelativeCard>
    </>
  );
};

export default RelativeCard;

const SRelativeCard = styled.li`
  width: 10%;
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 6px 6px;
  cursor: pointer;

  .img-container {
    display: block;
    outline: #000;
    text-decoration: none;
    color: #fff;
    background-color: transparent;

    .img-container2 {
      position: relative;
      white-space: pre-wrap;

      .img-container3 {
        position: relative;
        padding-top: 147.3%;
        border-radius: 4px;
        overflow: hidden;

        img {
          position: absolute;
          top: 0px;
          left: 0px;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-style: none;
          overflow: clip;
          overflow-clip-margin: content-box;
        }
      }
    }
  }
`;
