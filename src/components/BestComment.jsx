import React from "react";
import styled from "styled-components";

const BestComment = (props) => {
  return (
    <>
      {props.comment && (
        <SBestComment>
          <section>
            <div className="best_review">
              <div className="box">
                <div>
                  <h1>베스트 감상평</h1>
                </div>
              </div>
            </div>
            <article>
              <div className="best-review_contents">
                <div>
                  <img
                    src="https://robohash.org/sitetnisi.png?size=50x50&set=set1"
                    alt="user"
                  />
                </div>
                <div>⭐️⭐️⭐️⭐️⭐️</div>
              </div>
              <div className="best-review_name">
                <span>{props.comment.author}</span>
              </div>
              <div className="best-review_comment">
                <hr />
                <p>{props.comment.content}</p>
              </div>
            </article>
          </section>
        </SBestComment>
      )}
    </>
  );
};

export default BestComment;

const SBestComment = styled.section`
  margin: 0 0 32px;
  display: block;

  .best_review {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-end;
    font-size: initial;
    margin-bottom: 5px;

    .box {
      display: flex;
      align-items: center;
      min-width: 0;

      h1 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0px;
        line-height: 26px;
      }
    }
  }

  article {
    background: #191a1c;
    padding: 16px 20px 20px;
    border-radius: 4px;
    .best-review_contents {
      display: flex;
      justify-content: space-between;
      margin: 0 0 8px;

      img {
        vertical-align: top;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }

    .best-review_name {
      display: flex;
      align-items: center;
      color: #babac1;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20px;
      margin: 0 0 12px;

      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .best-review_comment {
      color: #84868d;
      font-size: 15px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20px;

      hr {
        background-color: #38393d;
        width: 100%;
        height: 1px;
        padding: 0;
        border: none;
        margin: 0 0 12px;
      }

      p {
        padding: 0;
        margin: 0;
      }
    }
  }
`;
