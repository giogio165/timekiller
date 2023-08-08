import React from "react";
import styled from "styled-components";
import { GlobalLayout } from "../global";
import { HiPlay } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";

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
        <ul>
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
      </SMain>
    </GlobalLayout>
  );
};

export default DetailPage;

const SMain = styled.main`
  flex: 1;
  display: block;

  ul {
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
`;
