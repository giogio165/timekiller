import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { TbMovie } from "react-icons/tb";
import { BiBook, BiMoviePlay } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { LuInbox } from "react-icons/lu";

// 추후에 컴포넌트 세분화시키기

const SideBar = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <SSideBar>
      <div className="container_img">
        <img
          alt="Watcha"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg=="
        />
      </div>
      <section className="sidebar-section">
        <ul className="sidebar-section_ul">
          <li className="li-custom">
            <div
              className={`${
                activeItem === 0 ? "li-custom_list_active" : "li-custom_list"
              }`}
              onClick={() => {
                handleItemClick(0);
                handleNavigation("/");
              }}
            >
              <div className="li-custom_info">
                <div className="li-custom_icon">
                  <TbMovie />
                </div>
              </div>
              비디오
            </div>
          </li>
          <li className="li-custom">
            <div
              className={`${
                activeItem === 1 ? "li-custom_list_active" : "li-custom_list"
              }`}
              onClick={() => {
                handleItemClick(1);
                handleNavigation("/webtoon");
              }}
            >
              <div className="li-custom_info">
                <div className="li-custom_icon">
                  <BiBook />
                </div>
              </div>
              웹툰
            </div>
          </li>
          <li className="li-custom">
            <div
              className={`${
                activeItem === 2 ? "li-custom_list_active" : "li-custom_list"
              }`}
              onClick={() => {
                handleItemClick(2);
                handleNavigation("/upcoming");
              }}
            >
              <div className="li-custom_info">
                <div className="li-custom_icon">
                  <BiMoviePlay />
                </div>
              </div>
              개봉관
            </div>
          </li>
        </ul>
        <hr />
        <ul className="sidebar-section_ul">
          <li className="li-custom">
            <div
              className={`${
                activeItem === 3 ? "li-custom_list_active" : "li-custom_list"
              }`}
              onClick={() => {
                handleItemClick(3);
                handleNavigation("/search");
              }}
            >
              <div className="li-custom_info">
                <div className="li-custom_icon">
                  <BiSearch />
                </div>
              </div>
              찾기
            </div>
          </li>
          <li className="li-custom">
            <div
              className={`${
                activeItem === 4 ? "li-custom_list_active" : "li-custom_list"
              }`}
              onClick={() => {
                handleItemClick(4);
                handleNavigation("/library");
              }}
            >
              <div className="li-custom_info">
                <div className="li-custom_icon">
                  <LuInbox />
                </div>
              </div>
              보관함
            </div>
          </li>
        </ul>
      </section>
    </SSideBar>
  );
};

export default SideBar;

const SSideBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 499;
  background: #141517;
  width: 240px;
  height: 100%;
  border-right: 1px #1b1c1d solid;
  .container_img {
    left: 0px;
    width: calc(100vw - 60px);
    margin: 20px 30px;

    img {
      height: 24px;
    }
  }
  .sidebar-section {
    padding: 0 16px;
    margin: 30px 0 0;

    hr {
      background-color: #1b1c1d;
      width: 100%;
      height: 1px;
      padding: 0;
      border: none;
      margin: 16px 0;
    }

    .sidebar-section_ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      margin: 0;

      .li-custom {
        align-self: stretch;
        list-style: none;
        padding: 0;
        margin: 0;

        .li-custom_info {
          display: flex;
          position: relative;
          align-items: center;
          align-self: stretch;
          margin: 0 10px 0 0;

          .li-custom_icon {
            color: #fff;
            font-size: 20px;
          }
        }
      }
    }
  }
`;
