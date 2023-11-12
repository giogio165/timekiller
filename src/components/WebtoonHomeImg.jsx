import React from "react";
import styled from "styled-components";

const WebtoonHomeImg = ({ title }) => {
  const w = window.innerWidth;
  return (
    <SWebtoonHomeImg>
      <h1 className="WebtoonHomeImg__title">{title}</h1>
      <div className="image-container">
        <img
          className="WebtoonHomeImg__img"
          width={w <= 1500 ? "1050px" : "1400px"}
          src="https://i.namu.wiki/i/xjsb94DInkswk_GadxYW9I5yTihZcucsvyH8fRFP6FYizENL4ZIbXaWMM8u80xGGwp6DtUbcImLXZjmCJK-TUw.webp"
        />
      </div>
      <div className="WebtoonHomeImg__overview">
        <h2>랑데뷰</h2>
        <div>
          내향적이고 소심한 성격이 고민인 하민이는 카페 '랑데뷰'에서 조금 특이한
          사람들을 만나게 된다. <br></br>28살 동갑내기 친구들의 맵단짠 감성
          시트콤!
        </div>
      </div>
    </SWebtoonHomeImg>
  );
};

const SWebtoonHomeImg = styled.div`
  height: 600px;
  position: relative;
  > .image-container {
    position: relative;
    height: 85%;
    width: 100%;
    overflow: hidden;
  }

  > .image-container > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > .image-container::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.5) 30%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
  .WebtoonHomeImg__overview {
    position: absolute;
    left: 26px;
    bottom: 55px;
    width: 80%;
    color: white;
    z-index: 2;
  }
`;
export default WebtoonHomeImg;
