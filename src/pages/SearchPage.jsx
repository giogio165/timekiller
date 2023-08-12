import React from "react";
import styled from "styled-components";
import { GlobalLayout } from "../global";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { ContentBox } from "../components";

const SearchPage = () => {
  return (
    <GlobalLayout>
      <SSearchPage>
        <div></div>
        <div className="container">
          <div className="container-slider">
            <div className="container-slider_title">
              <div className="title">
                <div>
                  <h1>인기</h1>
                </div>
              </div>
              <div className="more">
                <Link to="/" className="more-detail">
                  모두 보기
                </Link>
              </div>
            </div>
            <div className="container-slide_contents">
              <button className="btn-left">
                <span>
                  <MdArrowBackIosNew />
                </span>
              </button>
              <ul className="contents">
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
                <ContentBox />
              </ul>
              <button className="btn-right">
                <span>
                  <MdArrowForwardIos />
                </span>
              </button>
            </div>
          </div>
          <div className="container-slider"></div>
          <div className="container-slider"></div>
          <div className="container-slider"></div>
          <div className="container-slider"></div>
          <div className="container-slider"></div>
        </div>
      </SSearchPage>
    </GlobalLayout>
  );
};

export default SearchPage;

const SSearchPage = styled.div`
  .container {
    padding: 32px 0px 0px;

    .container-slider {
      max-width: 1600px;
      margin: 0 auto;

      .container-slider_title {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: flex-end;
        font-size: initial;
        margin-bottom: 5px;

        .title {
          display: flex;
          align-items: center;
          min-width: 0px;

          h1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0px;
            line-height: 26px;
            padding: 0;
            margin: 0;
          }
        }

        .more {
          flex-shrink: 0;
          padding-bottom: 3px;
          margin-left: 6px;

          .more-detail {
            color: rgb(132, 134, 141);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            outline: #000;
            text-decoration: none;
            background-color: transparent;
            cursor: pointer;
          }
        }
      }

      .container-slide_contents {
        position: relative;

        .contents {
          position: relative;
          z-index: 0;
          white-space: nowrap;
          margin: 0px -8px;
        }

        .btn-left {
          color: rgb(186, 186, 193);
          padding: 0px;
          border: 0px;
          outline: none;
          appearance: none;
          background: linear-gradient(
            90deg,
            rgb(0, 0, 0) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: -10px;
          z-index: 2;
          width: 40px;
          height: 100%;

          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            color: white;
            font-size: 30px;
          }
        }
        .btn-right {
          color: rgb(186, 186, 193);
          padding: 0px;
          border: 0px;
          outline: none;
          appearance: none;
          background: linear-gradient(
            90deg,
            rgb(0, 0, 0) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          position: absolute;
          top: 0px;
          bottom: 0px;
          right: -20px;
          z-index: 2;
          width: 40px;
          height: 100%;
          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            color: white;
            font-size: 30px;
          }
        }
      }
    }
  }
`;
