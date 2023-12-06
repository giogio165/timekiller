import React from "react";
import styled from "styled-components";

const GenreBox = (props) => {
  return (
    <>
      <SGenreBox>
        <div>
          <div className="content-link">
            <div className="img-container">
              <img src={props.img} alt="장르" />
              <div>
                <p>{props.title}</p>
              </div>
            </div>
          </div>
        </div>
      </SGenreBox>
    </>
  );
};

export default GenreBox;

const SGenreBox = styled.li`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 0px 6px;
  cursor: pointer;
  width: 18%;
  .content-link {
    outline: #000;
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    .img-container {
      position: relative;
      width: 100%;
      height: 100%;
      background: 0% 0% / cover no-repeat rgb(27, 31, 131);
      padding: 56.27% 0px 0px;
      border-radius: 4px;
      overflow: hidden;

      img {
        position: absolute;
        bottom: 0px;
        left: 0px;
        transform: scale(1.01);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      div {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        padding: 8px;
        overflow: hidden;

        p {
          color: rgb(255, 255, 255);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0px;
          line-height: 25px;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`;
