import React from "react";
import { UpcomingList } from "../components/index";
import { GlobalLayout } from "../global";

const UpcomingPage = () => {
  const sliderTitle = [
    "금주 최고 인기작",
    "익스클루시브",
    "설탕이 필요할 때 꺼내보세요",
    "Top 10",
    "드라마",
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
