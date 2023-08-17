import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContentsTitle = (props) => {
  return (
    <SContentsTitle>
      <div className="title">
        <div>
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="more">
        <Link to="/" className="more-detail">
          모두 보기
        </Link>
      </div>
    </SContentsTitle>
  );
};

export default ContentsTitle;

const SContentsTitle = styled.div`
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
`;
