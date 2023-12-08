import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { TbMovie } from "react-icons/tb";
import { BiBook, BiMoviePlay } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { LuInbox } from "react-icons/lu";
import { useSelector } from "react-redux";

import img from "./../assets/titime.png";

// 추후에 컴포넌트 세분화시키기

const SideBar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const handleNavigation = (route) => {
    navigate(route);
  };
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const isLogin = useSelector((state) => {
    return state.isLogin.login;
  });
  return (
    <SSideBar>
      <>
        <div className="logo-btn">
          <div className="container_img" onClick={goHome}>
            <img alt="TITIME" src={img} />
          </div>
        </div>
      </>
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
          {/* <li className="li-custom">
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
          </li> */}
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
        </ul>
        <hr />
        <ul className="sidebar-section_ul">
          <li className="li-custom">
            <div
              className={`${
                activeItem === 4 ? "li-custom_list_active" : "li-custom_list"
              }`}
              onClick={() => {
                handleItemClick(4);
                {
                  isLogin
                    ? handleNavigation("/library")
                    : handleNavigation("/login");
                }
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
    width: calc(100vw - 20px);
    margin: 20px 30px;

    img {
      height: 50px;
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

  .logo-btn {
    text-decoration: none;
    cursor: pointer;
  }
`;
