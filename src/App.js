import "./App.css";
import "./components/css/MovieList.css";
import "./components/css/MovieList2.css";
import "./components/css/MovieInfoButton.css";
import "./components/css/HomeVideo.css";
import "./components/css/UpcomingList.css";
import "./components/css/WebtoonPage.css";
import "./components/css/LoginPage.css";
import "./components/css/SignupPage.css";

import React from "react";
import {
  DetailPage,
  LibraryPage,
  MainPage,
  SearchPage,
  UpcomingPage,
  WebtoonPage,
  LogInPage,
  MyPage,
  SignupPage,
  SearchResultPage,
} from "./pages/index";
import { Header, SideBar } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/webtoon" element={<WebtoonPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/settings" element={<MyPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/search/:keyword" element={<SearchResultPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
