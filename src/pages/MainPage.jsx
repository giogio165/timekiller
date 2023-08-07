import React from "react";
import { GlobalLayout } from "../global";
import SideBar from "../components/SideBar";

const MainPage = () => {
  return (
    <GlobalLayout>
      <SideBar />
      <div>Home</div>
    </GlobalLayout>
  );
};

export default MainPage;
