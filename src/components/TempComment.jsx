import React from "react";
import styled from "styled-components";

const TempComment = (props) => {
  return (
    <>
      <SComment>
        <article>
          <div className="container-user_img">
            <div>
              <img
                src="https://robohash.org/automnisrerum.png?size=50x50&set=set1"
                alt="user"
              />
            </div>
          </div>
          <div className="container-user_name">
            <div className="user-name">
              <div>
                <span>땅벌</span>
              </div>
              <div>⭐️⭐️⭐️⭐️⭐️</div>
            </div>
            <div className="user-review">
              <p>
                휴그랜트 태연한 얼굴로 자조적 아무말 하는게 너무 웃김 눈물
                한방울 없이 상처받은 연기도 잘함
              </p>
            </div>
          </div>
        </article>
      </SComment>
    </>
  );
};

export default TempComment;

const SComment = styled.li`
  display: block;
  article {
    display: flex;
    align-items: flex-start;
    padding: 8px 0px;

    .container-user_img {
      margin: 0px 8px 0px 0px;

      div {
        outline: #000;
        text-decoration: none;
        color: #fff;

        img {
          width: 38px;
          height: 38px;
          border-radius: 50px;
        }
      }
    }

    .container-user_name {
      flex: 1;

      .user-name {
        display: flex;
        align-items: center;

        div {
          color: rgb(255, 255, 255);
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 20px;
          margin: 0px 4px 0px 0px;

          span {
            background-color: transparent;
            outline: #000;
            text-decoration: none;
            color: #fff;
          }
        }
      }
      .user-review {
        color: rgb(132, 134, 141);
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        white-space: pre-wrap;
        margin: 4px 0px;

        p {
          padding: 0;
          margin: 0;
          display: block;
        }
      }
    }
  }
`;
