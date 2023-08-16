import React, { useState } from "react";
import { GlobalLayout } from "../global";
import { createUserWithEmailAndPassword, auth } from "../fbase";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const gotoSignupPage = () => {
    navigate(`/login`);
  };

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
    <GlobalLayout>
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
                // className={name.length <= 2 ? "errorInput" : ""}
              />
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                placeholder="영문, 숫자, 특문 중 2개조합 10자 이상"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
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
    </GlobalLayout>
  );
};

export default SignupPage;
