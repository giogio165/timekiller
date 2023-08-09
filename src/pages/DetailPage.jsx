import React from "react";
import styled from "styled-components";
import { GlobalLayout } from "../global";
import { HiPlay } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";

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
            <div className="container-header_div">
              <section type="portrait" className="container-info">
                <div type="portrait" className="container-info_img">
                  <img
                    alt="노팅힐"
                    src="https://an2-img.amz.wtchn.net/image/v2/adH53t3Klw1_NW-zAKPnNA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk56STVlREV3T0RCeE9EQWlYU3dpY0NJNklpOTJNaTl6ZEc5eVpTOXBiV0ZuWlM4eE5qTXhNREUwTURVeE5EUXdOalk1TURnMEluMC5KLWNicGhDSWUtQ0pMcGdOaVJGQkFMc3hzM0QxYzdBZXgzTy1uUldIc253"
                  />
                </div>
                <div className="contents-info">
                  <h1>노팅 힐</h1>
                  <p className="contents-info_p1">
                    <span>
                      <label>로맨틱 코미디</label> · <label>OST</label> · 2시간
                      3분 ·{" "}
                      <span className="contents-info_score">평균 4.0</span>
                    </span>
                    <span className="separator"></span>
                    <span>
                      <span className="age">12</span>
                    </span>
                  </p>
                  <p className="contents-info_p2">
                    웨스턴 런던의 노팅힐에 사는 윌리엄은 우연히 세계적으로
                    유명한 배우 안나와 만나고 헤어진다. 반 년 후, 큰 문제를 안은
                    채 안나가 다시 나타나고 윌리엄은 그녀를 돕기로 결심한다.
                  </p>
                </div>
              </section>
              <div className="container-play">
                <section>
                  <div className="container-play_btn">
                    <div className="play">
                      <div className="icon">
                        <HiPlay />
                      </div>
                      감상하기
                    </div>
                  </div>
                  <div className="container-play_btn">
                    <button>
                      <AiOutlinePlus />
                      보고싶어요
                    </button>
                    <div className="etc">
                      <button>...</button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
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
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="wrapper-people">
                    <div className="container-people">
                      <div className="box-people">
                        <div className="box-people_img">
                          <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
                        </div>
                        <div className="box-people_info">
                          <div className="people-name">로저 미첼</div>
                          <div className="people-role">감독</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
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
                <li>
                  <article>
                    <div className="container-user_img">
                      <div>
                        <img src="https://robohash.org/automnisrerum.png?size=50x50&set=set1" />
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
                          휴그랜트 태연한 얼굴로 자조적 아무말 하는게 너무 웃김
                          눈물 한방울 없이 상처받은 연기도 잘함
                        </p>
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </section>
          </section>
          <section className="container-best_review">
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
                    <img src="https://robohash.org/automnisrerum.png?size=50x50&set=set1" />
                  </div>
                  <div>⭐️⭐️⭐️⭐️⭐️</div>
                </div>
                <div className="best-review_name">
                  <span>땅벌</span>
                </div>
                <div className="best-review_comment">
                  <hr />
                  <p>
                    휴그랜트 태연한 얼굴로 자조적 아무말 하는게 너무 웃김 눈물
                    한방울 없이 상처받은 연기도 잘함
                  </p>
                </div>
              </article>
            </section>
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

    .container-header_div {
      position: relative;
      z-index: 2;

      .container-info {
        display: flex;
        align-items: flex-start;
        max-width: 1680px;
        padding-bottom: 30px;
        padding-right: 40px;
        padding-left: 40px;
        margin: 50px auto 0;

        .container-info_img {
          display: inline-block;
          position: relative;
          vertical-align: top;
          width: 169px;
          height: 247px;
          border-radius: 4px;
          object-fit: cover;
          margin: 0 40px 0 0;
          overflow: hidden;

          img {
            vertical-align: top;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-style: none;
            overflow-clip-margin: content-box;
            overflow: clip;
          }
        }

        .contents-info {
          display: flex;
          flex: 1 1 0%;
          flex-direction: column;

          h1 {
            position: relative;
            top: 4px;
            font-size: 64px;
            font-weight: 900;
            line-height: 81px;
            font-family: Roboto, "Noto Sans KR", "Apple SD Gothic Neo",
              "Nanum Gothic", "Malgun Gothic", sans-serif;
            margin-top: 5px;
            margin-bottom: 10px;
          }

          .contents-info_p1 {
            display: flex;
            align-items: center;
            color: rgb(186, 186, 193);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            white-space: pre;
            margin: 10px 0px 0px;

            label {
              outline: #000;
            }
            .contents-info_score {
              color: rgb(255, 255, 255);
              font-size: 15px;
              font-weight: 500;
              letter-spacing: 0px;
              line-height: 20px;
            }
            .separator {
              background: rgba(255, 255, 255, 0.2);
              width: 1px;
              height: 13px;
              margin: 0px 15px;
            }
            .age {
              display: inline-flex;
              align-items: center;
              background: rgb(46, 47, 49);
              color: rgb(255, 255, 255);
              font-size: 12px;
              font-weight: 800;
              vertical-align: top;
              line-height: 18px;
              height: 20px;
              padding: 1px 5px;
              border-radius: 3px;
              margin: 0px 13px 0px 0px;
            }
          }
          .contents-info_p2 {
            color: rgb(186, 186, 193);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            max-width: 600px;
            margin: 10px 0px 0px;
            overflow: hidden;
          }
        }
      }
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

          .wrapper-people {
            display: block;

            .container-people {
              display: flex;
              position: relative;
              align-items: center;
              padding: 8px 0px;
              cursor: pointer;

              .box-people {
                display: flex;
                position: relative;
                flex: 1 1 0%;
                align-items: center;
                overflow: hidden;

                .box-people_img {
                  display: flex;
                  position: relative;
                  flex-shrink: 0;
                  justify-content: center;
                  align-items: center;
                  width: 62px;
                  height: 62px;
                  border-radius: 50%;
                  margin-right: 14px;
                  overflow: hidden;

                  img {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                }

                .box-people_info {
                  overflow: hidden;

                  .people-name {
                    color: rgb(255, 255, 255);
                    font-size: 16px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 22px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                  .people-role {
                    color: rgb(132, 134, 141);
                    font-size: 13px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    white-space: nowrap;
                    margin-top: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                }
              }
            }
          }
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

          li {
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
          }
        }
      }
    }

    .container-best_review {
      flex: 1;

      section {
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
      }
    }
  }
`;
