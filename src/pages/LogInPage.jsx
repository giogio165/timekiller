import React, { useState } from "react";
import { GlobalLayout } from "../global";
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
  const navigate = useNavigate();
  const gotoSignupPage = () => {
    navigate(`/signup`);
  };

  // const checkLogin = useSelector((state) => {
  //   return state.isLogin.login;
  // });
  // console.log(checkLogin);
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
    <GlobalLayout>
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
              />
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
    </GlobalLayout>
  );
};

export default LogInPage;
