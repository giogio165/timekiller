import React, { useState } from "react";
import { GlobalLayout } from "../global";
import { createUserWithEmailAndPassword, auth } from "../fbase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [nameInputFocused, setNameInputFocused] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [emailInputcheck, setEmailInputCheck] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordInputCheck, setPasswordInputCheck] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const gotoSignupPage = () => {
    navigate(`/login`);
  };

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

  //회원가입
  const handleEmailSignUp = (e) => {
    e.preventDefault();
    // 계정생성
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        //계정 생성 완
        const user = userCredential.user;
        console.log("새 계정 생성 완료, 유저: ", user);
        //회원가입 후 클리어
        setName("");
        setRegisterEmail("");
        setRegisterPassword("");
        setErrorMsg("회원가입이 완료되었습니다.");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <SLoginPage>
      <div className="SignupPage">
        <button className="signup-btn" onClick={gotoSignupPage}>
          회원가입
        </button>
        <div className="LoginPage__loginCon">
          <div className="login-text">
            <h4>회원가입</h4>
          </div>

          <form className="LoginPage__form">
            <div className="inputBox">
              <input
                type="text"
                name="name"
                placeholder="이름(2자이상)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameInputFocused(true)}
              />
              {nameInputFocused && name.length < 2 ? (
                <div className="error-mark"></div>
              ) : (
                ""
              )}
              {nameInputFocused && name.length >= 2 ? (
                <div className="success-mark"></div>
              ) : (
                ""
              )}
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
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
                placeholder="영문, 숫자, 특문 중 2개조합 10자 이상"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
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
              <button className="loginBtn" onClick={handleEmailSignUp}>
                계정 생성하기
              </button>
            </div>
            <div className="errorMsg">{errorMsg}</div>
          </form>
        </div>
      </div>
    </SLoginPage>
  );
};

export default SignupPage;

const SLoginPage = styled.div`
  background-color: #000;
  color: #fff;
`;
