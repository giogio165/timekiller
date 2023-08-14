import React from "react";
import UpcomingList from "../components/Upcoming/UpcomingList";
import { GlobalLayout } from "../global";

const UpcomingPage = () => {
  const sliderTitle = [
    "왓차 최고인기작",
    "왓차 익스클루시브",
    "설탕이 필요할 때 꺼내보세요",
    "왓차 Top 10",
    "오직 왓챠에서",
  ];
  return (
    <GlobalLayout>
      <div className="UpcomingPage">
        <UpcomingList title={"개봉관"} sliderTitle={sliderTitle} />
      </div>
    </GlobalLayout>
  );
};

export default UpcomingPage;
