import React from "react";
import styled from "styled-components";
import { GlobalLayout } from "../global";
import { HiPlay } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { People, Comment, BestComment, ContentsInfo } from "../components";

// 컴포넌트 세분화 시키기.

const DetailPage = (props) => {
  return (
    <GlobalLayout>
      <SMain>
        <div>
          <div className="temp"></div>
        </div>
        <div>
          <header className="container-header">
            <ContentsInfo />
          </header>
        </div>
        <ul className="select-options">
          <li>
            <button type="button" className="li-btn">
              콘텐츠 정보
            </button>
          </li>
          <li>
            <button type="button" className="li-btn2">
              관련 콘텐츠
            </button>
          </li>
        </ul>
        <section className="info">
          <section className="info-container">
            <section className="info-oneline">
              <ul className="comment">
                <li>
                  <img
                    height="24px"
                    width="24px"
                    alt="pic"
                    src="https://an2-mars.amz.wtchn.net/assets/reason_icons/rate_24-c3f027bf1048b7f33daefe37a233e9bf8d1d331b0b508bedefe7a8fed772a5d1.png"
                  />
                  <p>최근 시청한 회원들의 70%가 4점 이상 평가했어요.</p>
                </li>
              </ul>
            </section>
            <section className="info-oneline">
              <div className="info-people">
                <div className="people">
                  <div>
                    <h1>감독/출연</h1>
                  </div>
                </div>
                <div className="more">
                  <div>더보기</div>
                </div>
              </div>
              {/* 컴포넌트로 분리 */}
              <ul type="listItem" className="people-list">
                <People />
                <People />
                <People />
                <People />
                <People />
                <People />
                <People />
              </ul>
            </section>
            <section className="info-oneline">
              <div className="container-review_title">
                <div className="review-title">
                  <div>
                    <h1>
                      왓챠피디아 사용자 평
                      <div className="review-number">
                        <span>579572</span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              <ul className="review-list">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </ul>
            </section>
          </section>
          <section className="container-best_review">
            <BestComment />
          </section>
        </section>
      </SMain>
    </GlobalLayout>
  );
};

export default DetailPage;

const SMain = styled.main`
  flex: 1;
  display: block;

  .select-options {
    display: flex;
    justify-content: center;
    padding-right: 40px;
    padding-left: 40px;
    position: sticky;
    top: 56px;
    background: rgb(0, 0, 0);
    margin: 0px 0px 24px;
    list-style-type: none;
    li {
      display: list-item;
      .li-btn {
        display: inline-block;
        position: relative;
        white-space: nowrap;
        color: rgb(255, 255, 255);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 20px;
        padding: 14px 20px;
        cursor: pointer;
        border: 0 none transparent;
        outline: none 0;
        background: none;
      }
      .li-btn::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #fff;
        width: 100%;
        height: 2px;
      }
      .li-btn2 {
        display: inline-block;
        position: relative;
        white-space: nowrap;
        color: rgb(79, 81, 82);
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 20px;
        padding: 14px 20px;
        cursor: pointer;
        border: 0 none transparent;
        outline: none 0;
        background: none;
      }
    }
  }

  .temp {
    display: flex;
    position: fixed;
    z-index: 999;
    flex-direction: row;
  }

  .container-header {
    position: relative;
    z-index: 2;
    display: block;

    .container-play {
      background: rgba(0, 0, 0, 0.3);
      border-top: 1px solid rgb(27, 28, 29);
      border-bottom: 1px solid rgb(27, 28, 29);

      section {
        display: flex;
        justify-content: space-between;
        max-width: 1680px;
        padding: 16px 40px;
        margin: 0px auto;

        .container-play_btn {
          display: grid;
          grid-auto-flow: column;
          gap: 12px;

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 20px;
            background: transparent;
            color: rgb(255, 255, 255);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 9px 15px;
          }

          .play {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 0px;
            border-radius: 4px;
            overflow: hidden;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 20px;
            background: rgb(240, 47, 98);
            color: rgb(255, 255, 255);
            padding: 10px 16px;
            .icon {
              margin: 3px 6px 0px 0px;
              font-size: 17px;
            }
          }
          .etc {
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 4px;
              overflow: hidden;
              cursor: pointer;
              font-size: 15px;
              font-weight: 500;
              letter-spacing: 0px;
              line-height: 20px;
              background: transparent;
              color: rgb(255, 255, 255);
              border: 1px solid rgba(255, 255, 255, 0.15);
              padding: 9px 15px;
              height: 100%;
            }
          }
        }
      }
    }
  }

  .info {
    display: flex;
    max-width: 1680px;
    padding-right: 40px;
    padding-left: 40px;
    margin: 0 auto;

    .info-container {
      width: 64%;
      margin: 0 2.5% 0 0;

      .info-oneline {
        margin: 0 0 32px;

        .comment {
          padding: 0;
          margin: 0;
          list-style-type: none;
          display: block;

          li {
            display: flex;
            align-items: center;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            color: #fff;
            padding: 8px 0;

            img {
              flex-shrink: 0;
              margin: 0 14px 0 0;
            }

            p {
              flex: 1;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }

        .info-people {
          display: flex;
          justify-content: space-between;
          position: relative;
          align-items: flex-end;
          font-size: initial;
          margin-bottom: 5px;
          .people {
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

          .more {
            flex-shrink: 0;
            padding-bottom: 3px;
            margin-left: 6px;

            div {
              color: rgb(132, 134, 141);
              font-size: 15px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 20px;
              padding-bottom: 20px;
            }
          }
        }

        .people-list {
          display: grid;
          column-gap: 20px;
          grid-template-columns: repeat(2, 1fr);
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .container-review_title {
          display: flex;
          position: relative;
          justify-content: space-between;
          align-items: flex-end;
          font-size: initial;
          margin-bottom: 5px;

          .review-title {
            display: flex;
            align-items: center;
            min-width: 0;

            h1 {
              color: #fff;
              font-size: 20px;
              font-weight: 700;
              letter-spacing: 0px;
              line-height: 26px;
              padding: 0;
              margin: 0;

              .review-number {
                display: inline-block;
                vertical-align: top;
                margin: 3px 0 0 8px;

                span {
                  display: inline-block;
                  color: rgb(186, 186, 193);
                  font-size: 15px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 20px;
                  vertical-align: top;
                  margin: 0px 0px 0px 6px;
                }
              }
            }
          }
        }

        .review-list {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      }
    }

    .container-best_review {
      flex: 1;
    }
  }
`;
