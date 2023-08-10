import React from "react";
import styled from "styled-components";
import user_image from "../global/user_image.json";

const Comment = (props) => {
  console.log(props);
  console.log(user_image[props.index].user_img);
  return (
    <>
      <SComment>
        <article>
          <div className="container-user_img">
            <div>
              <img src={user_image[props.index].user_img} alt="user" />
            </div>
          </div>
          <div className="container-user_name">
            <div className="user-name">
              <div>
                <span>{props.comment.author}</span>
              </div>
              <div>⭐️⭐️⭐️⭐️⭐️</div>
            </div>
            <div className="user-review">
              <p>{props.comment.content}</p>
            </div>
          </div>
        </article>
      </SComment>
    </>
  );
};

export default Comment;

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
