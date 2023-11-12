import React, { useState } from "react";
import styled from "styled-components";
import { auth, signInWithEmailAndPassword } from "../fbase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../global/store/loginSlice";

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  //로그인 상태 확인 할 수 있음 -> 리덕스 go
  // const [login, setLogin] = useState(false);

  const dispatch = useDispatch();
  const [emailInputcheck, setEmailInputCheck] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const [passwordInputCheck, setPasswordInputCheck] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const navigate = useNavigate();
  const gotoSignupPage = () => {
    navigate(`/signup`);
  };

  // const checkLogin = useSelector((state) => {
  //   return state.isLogin.login;
  // });
  // console.log(checkLogin);
  // 유효성검사
  const checkEmail = (e) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmailInputCheck(regExp.test(e.target.value));
  };
  const checkPassword = (e) => {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/;
    setPasswordInputCheck(regex.test(e.target.value));
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    setError(null);
    try {
      // Email login
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User logged in
      const user = userCredential.user;
      // setLogin(true);
      dispatch(isLogin(true));
      console.log("로그인 완료:", user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  // console.log("login", login);
  return (
    <SLoginPage>
      <div className="LogInPage">
        <button className="signup-btn" onClick={gotoSignupPage}>
          회원가입
        </button>
        <div className="LoginPage__loginCon">
          <div className="login-text">
            <h4>로그인</h4>

            <div className="passwordForgotten">비밀번호를 잊어버리셨나요?</div>
          </div>

          <form className="LoginPage__form">
            <div className="inputBox">
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={checkEmail}
              />
              {!emailInputcheck && emailFocused ? (
                <div className="error-mark"></div>
              ) : (
                ""
              )}
              {emailInputcheck && emailFocused ? (
                <div className="success-mark"></div>
              ) : (
                ""
              )}
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={checkPassword}
              />
              {!passwordInputCheck && passwordFocused ? (
                <div className="error-mark"></div>
              ) : (
                ""
              )}
              {passwordInputCheck && passwordFocused ? (
                <div className="success-mark"></div>
              ) : (
                ""
              )}
            </div>

            <div className="LoginPage__loginBtnCon">
              <button className="loginBtn" onClick={handleEmailLogin}>
                로그인
              </button>
            </div>
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </SLoginPage>
  );
};

export default LogInPage;

const SLoginPage = styled.div`
  background-color: #000;
  color: #fff;
`;
