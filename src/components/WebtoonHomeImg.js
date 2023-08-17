import React from "react";

const WebtoonHomeImg = ({ title }) => {
  const w = window.innerWidth;
  return (
    <div className="WebtoonHomeImg">
      <h1 className="WebtoonHomeImg__title">{title}</h1>
      <img
        className="WebtoonHomeImg__img"
        width={w <= 1500 ? "1050px" : "1400px"}
        src="https://i.namu.wiki/i/xjsb94DInkswk_GadxYW9I5yTihZcucsvyH8fRFP6FYizENL4ZIbXaWMM8u80xGGwp6DtUbcImLXZjmCJK-TUw.webp"
      ></img>
      <div className="WebtoonHomeImg__overview">
        <h2>랑데뷰</h2>
        <div>
          내향적이고 소심한 성격이 고민인 하민이는 카페 '랑데뷰'에서 조금 특이한
          사람들을 만나게 된다. <br></br>28살 동갑내기 친구들의 맵단짠 감성
          시트콤!
        </div>
      </div>
    </div>
  );
};

export default WebtoonHomeImg;
