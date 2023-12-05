import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contentUpdate } from "../global/store/detailSlice";

const LibraryCard = ({ elem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate(`/detail/${elem.id}`);
    dispatch(contentUpdate(elem));
  };
  return (
    <>
      <SLibraryCard>
        <div>
          <div className="container-contents" onClick={goDetailPage}>
            <div className="contents-info">
              <div className="container-img">
                <img
                  src={`https://image.tmdb.org/t/p/w300${elem.poster_path}`}
                />
              </div>
              <p className="title">{elem.title || elem.name}</p>
              <p className="type">영화</p>
            </div>
          </div>
        </div>
        <article></article>
      </SLibraryCard>
    </>
  );
};

export default LibraryCard;

const SLibraryCard = styled.li`
  width: 12.5%;
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 0px 6px;
  cursor: pointer;

  .container-contents {
    display: block;
    outline: #000;
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    .contents-info {
      position: relative;
      white-space: pre-wrap;

      .container-img {
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
        }
      }

      .title {
        color: rgb(255, 255, 255);
        white-space: nowrap;
        margin: 3px 0px 0px;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0;
      }
      .type {
        color: rgb(132, 134, 141);
        white-space: nowrap;
        margin: 2px 0px 0px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        text-decoration: none;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0;
      }
    }
  }
`;
