import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contentUpdate } from "../global/store/detailSlice";

const LibraryCard = ({ content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate(`/detail/${content.id}`);
    dispatch(contentUpdate(content));
  };

  return (
    <>
      <SLibraryCard>
        <div className="contents-container" onClick={goDetailPage}>
          <div className="contents-poster">
            <img
              src={`https://image.tmdb.org/t/p/w300${content?.poster_path}`}
            />
          </div>
          <div className="contents-info">
            <p className="title">{content?.title || content?.name}</p>
          </div>
        </div>
      </SLibraryCard>
    </>
  );
};

export default LibraryCard;

const SLibraryCard = styled.div`
  width: 14%;
  cursor: pointer;
  display: inline-block;
  margin: 10px;

  .contents-container {
    width: 100%;
    outline: #000;
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    .contents-poster {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .contents-info {
      position: relative;
      white-space: pre-wrap;
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
  }
`;
