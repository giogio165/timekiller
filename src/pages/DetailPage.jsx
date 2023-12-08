import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalLayout } from "../global";
import { HiPlay } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import {
  People,
  Comment,
  BestComment,
  ContentsInfo,
  RelativeCard,
} from "../components";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { keep } from "../global/store/keepSlice";
import { openTvYouTubeVideo, openYouTubeVideo } from "../api/VideoApi";
import { fetchComment, fetchPeople, fetchRelatives } from "../api/MovieApi";
import { fetchTvPeople, fetchTvRealatives } from "../api/TvApi";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [peoples, setPeoples] = useState([]);
  const [comments, setComments] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [relative, setRelative] = useState(false);
  const [inform, setInform] = useState(true);

  const real = useSelector((state) => {
    return state.contentUpdate.value;
  });

  // const arr = useSelector((state) => {
  //   return state.keep.library;
  // });

  const goToYoutube = () => {
    if (real?.title) {
      openYouTubeVideo(id);
    } else {
      openTvYouTubeVideo(id);
    }
  };

  const relativeHandler = () => {
    setInform(false);
    setRelative(true);
  };
  const informHandler = () => {
    setInform(true);
    setRelative(false);
  };
  const keepHandler = () => {
    dispatch(keep(real));
  };

  useEffect(() => {
    const fetchPeopleData = async () => {
      var peopleInfo = [];
      if (real.name) {
        peopleInfo = await fetchTvPeople(id);
      } else {
        peopleInfo = await fetchPeople(id);
      }

      if (peopleInfo.cast) {
        setPeoples(peopleInfo.cast.slice(0, 7));
      }
    };
    const fetchCommentData = async () => {
      const commentInfo = await fetchComment(id);
      if (commentInfo) {
        setComments(commentInfo.results);
      }
    };
    const fetchRelativeData = async () => {
      var contentsRelative = [];
      if (real.name) {
        contentsRelative = await fetchTvRealatives(id);
      } else {
        contentsRelative = await fetchRelatives(id);
      }

      if (contentsRelative) {
        setSimilar(contentsRelative.results);
      }
    };
    fetchPeopleData();
    fetchCommentData();
    fetchRelativeData();
  }, [id]);

  return (
    <GlobalLayout>
      <SMain>
        <div>
          <div className="temp"></div>
        </div>
        <div>
          <header className="container-header">
            <ContentsInfo id={id} real={real} />
            <div className="container-play">
              <section>
                <div
                  className="container-play_btn"
                  onClick={() => {
                    goToYoutube();
                  }}
                >
                  <div className="play">
                    <div className="icon">
                      <HiPlay />
                    </div>
                    예고편 감상하기
                  </div>
                </div>
                <div className="container-play_btn">
                  <button className="btn" onClick={keepHandler}>
                    <AiOutlinePlus />
                    보고싶어요
                  </button>
                  <div className="etc">
                    <button>...</button>
                  </div>
                </div>
              </section>
            </div>
          </header>
        </div>
        <ul className="select-options">
          <li>
            <button
              type="button"
              className={inform ? "li-btn" : "li-btn2"}
              onClick={informHandler}
            >
              콘텐츠 정보
            </button>
          </li>
          <li>
            <button
              type="button"
              className={relative ? "li-btn" : "li-btn2"}
              onClick={relativeHandler}
            >
              관련 콘텐츠
            </button>
          </li>
        </ul>
        {inform ? (
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
                    <p>
                      {real?.vote_count}명의 회원이 {real?.vote_average}로
                      평가했어요.
                    </p>
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

                <ul type="listItem" className="people-list">
                  {peoples.map((people, index) => (
                    <People people={people} key={index} />
                  ))}
                </ul>
              </section>
              {comments && (
                <section className="info-oneline">
                  <div className="container-review_title">
                    <div className="review-title">
                      <div>
                        <h1>
                          사용자 평
                          <div className="review-number">
                            <span>
                              {comments.length !== 0 ? comments.length : 0}
                            </span>
                          </div>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <ul className="review-list">
                    {comments.length !== 0
                      ? comments.map((comment, index) => (
                          <Comment
                            comment={comment}
                            index={index}
                            key={index}
                          />
                        ))
                      : "리뷰가 없습니다."}
                  </ul>
                </section>
              )}
            </section>
            {comments && (
              <section className="container-best_review">
                <BestComment comment={comments[0]} />
              </section>
            )}
          </section>
        ) : (
          <div className="relative">
            <div className="relative-title">
              <div className="title">
                <div>
                  <h1>비슷한 콘텐츠</h1>
                </div>
              </div>
              <div></div>
            </div>
            <section className="relative-contents">
              <div className="contents-list">
                <div className="contents-list_container">
                  <ul>
                    {similar?.map((elem, index) => (
                      <RelativeCard info={elem} key={index} />
                    ))}
                  </ul>
                </div>
              </div>
              <div></div>
            </section>
          </div>
        )}
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

          .btn {
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

            &:hover {
              background-color: rgba(255, 255, 255, 0.15);
            }
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

              &:hover {
                background-color: rgba(255, 255, 255, 0.15);
              }
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

  .relative {
    margin: 0px auto;
    padding-bottom: 32px;
    padding-right: 40px;
    padding-left: 40px;
    overflow: hidden;
    width: 100%;

    .relative-title {
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
        }
      }
    }

    .relative-contents {
      display: block;
      overflow: hidden;

      .contents-list {
        margin-bottom: 12px;

        .contents-list_container {
          position: relative;

          ul {
            position: relative;
            z-index: 0;
            margin: 0px -6px;
            padding: 0;
            list-style-type: none;
            width: 100%;
            display: flex;
            flex: auto;
            flex-wrap: wrap;

            li {
              width: 10%;
              display: inline-block;
              position: relative;
              vertical-align: top;
              padding: 6px 6px;
              cursor: pointer;

              .img-container {
                display: block;
                outline: #000;
                text-decoration: none;
                color: #fff;
                background-color: transparent;

                .img-container2 {
                  position: relative;
                  white-space: pre-wrap;

                  .img-container3 {
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
                      border-style: none;
                      overflow: clip;
                      overflow-clip-margin: content-box;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
