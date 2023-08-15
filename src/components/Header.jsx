import React, { useState } from "react";
import styled from "styled-components";
import { BiBell } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { useMatch, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../global/store/searchSlice";

const Header = () => {
  const searchMatch = useMatch("/search");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const onChangeHandle = (event) => {
    setKeyword(event.target.value);
  };
  const onSubmitHandle = (event) => {
    event.preventDefault();
    setKeyword("");
    dispatch(search(keyword));
    navigate(`/search/${keyword}`);
  };

  return (
    <SHeader>
      <nav>
        <div className="container-logo">
          {searchMatch && (
            <form className="container-form" onSubmit={onSubmitHandle}>
              <label>
                <div className="form-icon">
                  <BiSearch />
                </div>
                <input
                  autoComplete="off"
                  id="query"
                  name="query"
                  placeholder="콘텐츠, 태그, 인물, 리스트 검색"
                  type="search"
                  value={keyword}
                  className="form-input"
                  onChange={onChangeHandle}
                />
              </label>
            </form>
          )}
          <div className="container-logo_img">
            <div className="container-logo_img-detail">
              <img
                alt="Watcha Logo"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg=="
              />
            </div>
          </div>
        </div>
        <div className="container-menu">
          <div className="container-menu_detail">
            <div className="menu-alarm">
              <div>
                <div className="alarm-container">
                  <button
                    aria-label="소식함"
                    type="button"
                    className="alarm-btn"
                  >
                    <span>
                      <BiBell />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="menu-account">
              <div>
                <div className="menu-account_detail">
                  <button className="account-btn">
                    <div className="img-container">
                      <img
                        src="https://i.pinimg.com/236x/90/c7/f7/90c7f7afa68ea9b875eafbe887f454e8.jpg"
                        alt="user"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </SHeader>
  );
};

export default Header;

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  padding-left: 240px;
  box-sizing: border-box;

  nav {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 12px 40px;
    background: #141517;
    transition: background-color 300ms;
    box-sizing: border-box;

    .container-logo {
      display: flex;
      max-width: 100%;

      .container-form {
        position: relative;
        width: 337px;
        display: block;
        margin-top: 0em;

        label {
          display: flex;
          align-items: center;
          background: rgb(34, 35, 38);
          padding: 8px 12px;
          border-radius: 8px;
          overflow: hidden;
          cursor: default;

          .form-icon {
            flex: 0 0 auto;
            color: rgb(132, 134, 141);
            width: 20px;
            height: 20px;
            margin-right: 8px;
            font-size: 24px;
          }
          .form-input {
            flex: 1 0 auto;
            background: transparent;
            color: rgb(255, 255, 255);
            padding: 0px;
            border: 0px;
            outline: none;
            margin: 0px;
            appearance: none;
            caret-color: rgb(248, 47, 98);
            font-size: 15px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            outline-offset: 2px;
            overflow: visible;
          }
        }
      }

      .container-logo_img {
        display: none;

        .container-logo_img-detail {
          color: #fff;
          outline: #000;
          text-decoration: none;
          background-color: transparent;

          img {
            vertical-align: top;
            width: 80px;
            height: 26px;
            border-style: none;
            overflow-clip-margin: border-box;
            overflow: clip;
          }
        }
      }
    }

    .container-menu {
      display: flex;

      .container-menu_detail {
        display: flex;
        align-items: center;
        gap: 27px;
        padding-top: 5px;

        .menu-alarm {
          position: relative;

          .alarm-container {
            width: 100%;
            height: 100%;

            .alarm-btn {
              margin-bottom: 2px;
              cursor: pointer;
              border: 0 none transparent;
              outline: none 0;
              background: none;
              padding: 0;
              color: #fff;
              font-size: 24px;

              span {
                position: relative;
              }
            }
          }
        }

        .menu-account {
          position: relative;

          .menu-account_detail {
            width: 100%;
            height: 100%;

            .account-btn {
              cursor: pointer;
              border: 0 none transparent;
              outline: none 0;
              background: none;
              padding: 0;
              line-height: normal;
              text-transform: none;
              overflow: visible;

              .img-container {
                width: 32px;
                height: 32px;

                img {
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
    }
  }
`;
