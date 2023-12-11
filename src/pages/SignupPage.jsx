import React, { useState } from "react";
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
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
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

  .SignupPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .signup-btn {
      position: absolute;
      top: 0px;
      right: 30px;
      border: none;
      width: 82px;
      height: 32px;
      border-radius: 40px;
      background-color: #fff;
    }

    .LoginPage__loginCon {
      width: 300px;
      margin-left: 220px;

      .login-text {
        width: 100%;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
      }

      .LoginPage__form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .inputBox {
          width: 100%;
          position: relative;

          input {
            width: 100%;
            font-size: 16px;
            padding: 10px 10px 10px 14px;
          }

          .error-mark {
            width: 20px;
            height: 20px;
            background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gSW52YWxpZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29ucy0vLVNldHRpbmdzLS8tSW52YWxpZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IngtY2lyY2xlLWYiIGZpbGw9IiNEQjQyNDEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4wNzA1NTU2LDE3LjA3IEMxMy4xODE2NjY3LDIwLjk1ODg4ODkgNi44MTgzMzMzMywyMC45NTg4ODg5IDIuOTI5NDQ0NDQsMTcuMDcgQy0wLjk1ODg4ODg4OSwxMy4xODE2NjY3IC0wLjk1ODg4ODg4OSw2LjgxODMzMzMzIDIuOTI5NDQ0NDQsMi45Mjk0NDQ0NCBDNi44MTgzMzMzMywtMC45NTg4ODg4ODkgMTMuMTgxNjY2NywtMC45NTg4ODg4ODkgMTcuMDcsMi45Mjk0NDQ0NCBDMjAuOTU4ODg4OSw2LjgxODMzMzMzIDIwLjk1ODg4ODksMTMuMTgxNjY2NyAxNy4wNzA1NTU2LDE3LjA3IEwxNy4wNzA1NTU2LDE3LjA3IFogTTEzLjg5Mzg4ODksNy42NjM4ODg4OSBMMTIuMzM2MTExMSw2LjEwNjExMTExIEwxMCw4LjQ0Mjc3Nzc4IEw3LjY2Mzg4ODg5LDYuMTA2MTExMTEgTDYuMTA2NjY2NjcsNy42NjM4ODg4OSBMOC40NDI3Nzc3OCwxMCBMNi4xMDY2NjY2NywxMi4zMzYxMTExIEw3LjY2Mzg4ODg5LDEzLjg5Mzg4ODkgTDEwLDExLjU1NzIyMjIgTDEyLjMzNjExMTEsMTMuODkzODg4OSBMMTMuODkzODg4OSwxMi4zMzYxMTExIEwxMS41NTcyMjIyLDEwIEwxMy44OTM4ODg5LDcuNjYzODg4ODkgTDEzLjg5Mzg4ODksNy42NjM4ODg4OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
            position: absolute;
            top: 10px;
            left: 300px;
            margin-left: 10px;
          }

          .success-mark {
            width: 20px;
            height: 20px;
            background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gVmFsaWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbnMtLy1TZXR0aW5ncy0vLVZhbGlkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY2hlY2stY2lyY2xlLWYiIGZpbGw9IiMzQ0FBRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxOS45OTg4ODg5IEM0LjUwMDU1NTU2LDE5Ljk5ODg4ODkgMC4wMDExMTExMTExMSwxNS40OTg4ODg5IDAuMDAxMTExMTExMTEsOS45OTk0NDQ0NCBDMC4wMDExMTExMTExMSw0LjUwMTExMTExIDQuNTAwNTU1NTYsMC4wMDExMTExMTExMSAxMCwwLjAwMTExMTExMTExIEMxNS40OTk0NDQ0LDAuMDAxMTExMTExMTEgMTkuOTk4ODg4OSw0LjUwMTExMTExIDE5Ljk5ODg4ODksOS45OTk0NDQ0NCBDMTkuOTk4ODg4OSwxNS40OTg4ODg5IDE1LjQ5OTQ0NDQsMTkuOTk4ODg4OSAxMCwxOS45OTg4ODg5IEwxMCwxOS45OTg4ODg5IFogTTEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBMOC4xMTk0NDQ0NCwxMS4yOTYxMTExIEw2LjA0NjY2NjY3LDkuMjYgTDQuNDQzODg4ODksMTAuODM0NDQ0NCBMOC4xMTk0NDQ0NCwxNC40NDUgTDkuNzIyMjIyMjIsMTIuODcwNTU1NiBMMTUuMDAwNTU1Niw3LjY4NTU1NTU2IEwxMy4zOTc3Nzc4LDYuMTEwNTU1NTYgTDEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBaIE04LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBMOS43MjIyMjIyMiwxMi44NzA1NTU2IEw4LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
            position: absolute;
            top: 10px;
            left: 300px;
            z-index: 2;
            margin-left: 10px;
          }
        }

        .LoginPage__loginBtnCon {
          width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;

          .loginBtn {
            width: 100%;
            height: 48px;
            color: white;
            background-color: rgb(248, 47, 98);
            border: none;
            border-radius: 40px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
