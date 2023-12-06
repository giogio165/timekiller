import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiBell } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { useMatch, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../global/store/searchSlice";
import { isLogin } from "../global/store/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const word = useSelector((state) => {
    return state.search.value;
  });
  const searchMatch = useMatch("/search");
  const searchResultMatch = useMatch(`/search/${word}`);

  const checkLogin = useSelector((state) => {
    return state.isLogin.login;
  });

  const gotoLoginPage = () => {
    navigate("/login");
  };

  const gotoLibrary = () => {
    navigate("/library");
  };

  const gotoSignupPage = () => {
    navigate("/signup");
  };

  const logout = () => {
    dispatch(isLogin(false));
  };
  // 배경 클릭시 드롭다운 없어지기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };
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
          {(searchMatch || searchResultMatch) && (
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
                    <div
                      className="img-container"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown();
                      }}
                    >
                      <img
                        src="https://i.pinimg.com/236x/90/c7/f7/90c7f7afa68ea9b875eafbe887f454e8.jpg"
                        alt="user"
                      />
                    </div>
                  </button>
                </div>
                {isDropdownVisible && (
                  <div className="dropdown-content" ref={dropdownRef}>
                    <ul>
                      {!checkLogin && (
                        <>
                          <li onClick={gotoLoginPage}>로그인</li>
                          <li onClick={gotoSignupPage}>회원가입</li>
                        </>
                      )}
                      {checkLogin && (
                        <>
                          <li onClick={gotoLibrary}>보관함</li>
                          <li onClick={logout}>로그아웃</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
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

        .dropdown-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 200px;
          position: absolute;
          top: 100%;
          right: 0;
          background-color: rgb(40, 41, 42);
          border: none;
          z-index: 1;
          cursor: pointer;
          border-radius: 4px;
          overflow: hidden;
        }
        .dropdown-content ul {
          padding: 4px 0;
          margin: 4px 0;
        }
        .dropdown-content li {
          display: flex;
          align-items: center;
          font-size: 14px;
          list-style: none;
          color: white;
          padding: 0 16px;
          height: 40px;
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
