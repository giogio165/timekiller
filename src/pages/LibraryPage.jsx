import React from "react";
import styled from "styled-components";
import { GlobalLayout } from "../global";
import { Link } from "react-router-dom";
import { TbMovie } from "react-icons/tb";
import { BiBook, BiMoviePlay } from "react-icons/bi";
import { useSelector } from "react-redux";
import { LibraryCard } from "../components/index";

const LibraryPage = () => {
  const list = useSelector((state) => {
    return state.keep.library;
  });
  console.log(list);
  return (
    <GlobalLayout>
      <SLibraryPage>
        <div></div>
        <div className="wrapper">
          <div className="library-title">
            <h1>보관함</h1>
          </div>
          <section className="container">
            <ul className="container-ul">
              <li>
                <Link to="/" className="li-custom">
                  <div className="li-custom_info">
                    <div className="li-custom_icon">
                      <TbMovie />
                    </div>
                    <div className="li-custom_title">비디오</div>
                  </div>
                  <hr type="regular" />
                </Link>
              </li>
              <li>
                <Link to="/webtoon" className="li-custom">
                  <div className="li-custom_info">
                    <div className="li-custom_icon">
                      <BiBook />
                    </div>
                    <div className="li-custom_title">웹툰</div>
                  </div>
                  <hr type="regular" />
                </Link>
              </li>
              <li>
                <Link to="/upcoming" className="li-custom">
                  <div className="li-custom_info">
                    <div className="li-custom_icon">
                      <BiMoviePlay />
                    </div>
                    <div className="li-custom_title">개봉작</div>
                  </div>
                  <hr type="regular" />
                </Link>
              </li>
            </ul>
          </section>
          <section className="container">
            <div className="wrapper-title">
              <div className="container-title">
                <div>
                  <h1>최근 보고싶어요한 콘텐츠</h1>
                </div>
              </div>
            </div>
            <div className="wrapper-contents">
              <ul className="contents-ul">
                {list.map((elem, index) => (
                  <LibraryCard elem={elem} key={index} />
                ))}
              </ul>
            </div>
          </section>
          <section className="container"></section>
        </div>
      </SLibraryPage>
    </GlobalLayout>
  );
};

export default LibraryPage;

const SLibraryPage = styled.main`
  flex: 1;
  background: #000;

  .wrapper {
    max-width: 1680;
    margin: 0 auto;
    padding-bottom: 32px;
    padding-right: 40px;
    padding-left: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;

    .library-title {
      margin: 54px 0 0;

      h1 {
        color: #fff;
        margin: 0 0 13px;
        font-size: 30px;
        font-weight: 800;
        letter-spacing: 0px;
        line-height: 40px;
      }
    }

    .container {
      margin-bottom: 32px;

      .container-ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: block;

        li {
          display: list-item;

          .li-custom {
            display: flex;
            position: relative;
            justify-content: flex-start;
            align-items: center;
            color: rgb(255, 255, 255);
            white-space: nowrap;
            height: 56px;
            overflow: hidden;
            text-decoration: none;
            background-color: transparent;
            cursor: pointer;

            hr {
              background-color: rgb(27, 28, 29);
              width: 100%;
              height: 1px;
              padding: 0px;
              border: none;
              margin: 0px;
              position: absolute;
              bottom: 0px;
              left: 0px;
            }

            .li-custom_info {
              display: flex;
              overflow: hidden;

              .li-custom_icon {
                width: 24px;
                height: 24px;
                font-size: 24px;
                margin-right: 12px;
              }
            }
            .li-custom_title {
              font-size: 19px;
              font-weight: 400;
              letter-spacing: 0px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }

      .wrapper-title {
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: flex-end;
        font-size: initial;
        margin-bottom: 5px;

        .container-title {
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

      .wrapper-contents {
        position: relative;

        .contents-ul {
          position: relative;
          z-index: 0;
          white-space: nowrap;
          margin: 0px -6px;
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      }
    }
  }
`;
