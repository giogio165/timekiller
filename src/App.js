import "./App.css";
import React from "react";
import {
  DetailPage,
  LibraryPage,
  MainPage,
  SearchPage,
  UpcomingPage,
  WebtoonPage,
} from "./pages/index";
import { Header, SideBar } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
