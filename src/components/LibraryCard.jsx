import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contentUpdate } from "../global/store/detailSlice";

const LibraryCard = ({ video, webtoon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate(`/detail/${video.id}`);
    dispatch(contentUpdate(video));
  };

  const gotoWebtoonUrl = () => {
    if (webtoon.url) {
      window.open(webtoon.url, "_blank");
    }
  };

  return (
    <>
      <SLibraryCard>
        {video ? (
          <div className="contents-container" onClick={goDetailPage}>
            <div className="contents-poster">
              <img
                alt="video_poster"
                src={`https://image.tmdb.org/t/p/w300${video?.poster_path}`}
              />
            </div>
            <div className="contents-info">
              <p className="title">{video?.title || video?.name}</p>
            </div>
          </div>
        ) : (
          <div className="contents-container" onClick={gotoWebtoonUrl}>
            <div className="contents-poster">
              <img src={webtoon.img} alt="webtoon_img" />
            </div>
            <div className="contents-info">
              <p className="title">{webtoon?.title || webtoon?.name}</p>
            </div>
          </div>
        )}
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
