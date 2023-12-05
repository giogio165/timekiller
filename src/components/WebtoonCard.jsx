import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import MovieInfoButton from "./MovieInfoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const WebtoonCard = ({ it, number }) => {
  // number는 WebtoonPage에서 넘어옴, Carousel에 들어갈 아이템 갯수/ it은 webtoon
  const webtoonUrl = it.url;
  const gotoWebtoonUrl = () => {
    if (webtoonUrl) {
      window.open(webtoonUrl, "_blank");
    }
  };

  return (
    <SWebtoonCon>
      {number === 3 ? ( // 첫번째 webtoon Carousel
        <div>
          <SWebtoonInfo>
            <div className="WebtoonCard__subtitle">왓차오리지널 웹툰</div>
            <div className="WebtoonCard__title">{it.title}</div>
          </SWebtoonInfo>
          <SWebtoonCard onClick={gotoWebtoonUrl}>
            <div className="WebtoonCard__img-wrapper">
              <img
                src={it.img}
                alt={`${it.title} Poster`}
                className="Webtoon__poster"
              />
              <div className="WebtoonCard__overlay"></div>
              <div className="WebtoonCard__freeTag">전체 무료</div>
            </div>
          </SWebtoonCard>
        </div>
      ) : (
        //두번째 webtoon Carousel
        <SWebtoonCard2 onClick={gotoWebtoonUrl}>
          <div className="WebtoonCard__img-wrapper">
            <div className="WebtoonCard__purchaseTag">개별구매</div>
            <img
              src={it.img}
              alt={`${it.title} Poster`}
              className="Webtoon__poster"
            />
          </div>
          <div className="WebtoonCard2__overlay ">
            <div className="webtoon-info2">
              <MovieInfoButton webtoon={it} />
              <h4 className="WebtoonCard2__title">{it.title}</h4>
              <div>{it.author}</div>
              <div>
                찜
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    "--fa-primary-color": "#ffffff",
                    "--fa-secondary-color": "#ffffff",
                  }}
                />
                {it.fanCount}
              </div>
            </div>
          </div>
        </SWebtoonCard2>
      )}
    </SWebtoonCon>
  );
};

export default WebtoonCard;

const SWebtoonCon = styled.div`
  width: 100%;
`;
const SWebtoonInfo = styled.div`
  margin: 10px 0 10px 10%;
  white-space: nowrap;
  overflow: hidden;

  .WebtoonCard__title {
    font-size: 20px;
    font-weight: 700;
  }

  .WebtoonCard__subtitle {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const SWebtoonCard = styled.div`
  width: 80%;
  height: 200px;
  margin-left: 10%;
  cursor: pointer;

  &:hover .WebtoonCard__overlay {
    display: flex;
    opacity: 1;
  }

  .WebtoonCard__img-wrapper {
    width: 100%;
    position: relative;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    background-size: cover;
    border-radius: 8px;
    z-index: 1;
    position: relative;
  }
  .Webtoon__poster {
    position: relative;
    width: 80%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
  }
  .WebtoonCard__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 8px;
  }
  .WebtoonCard__freeTag {
    width: 30%;
    height: 30px;
    color: white;
    background-color: #f82d62;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 2;
  }
`;
//여기서부터 Card2
const SWebtoonCard2 = styled.div`
  position: relative;
  width: 75%;
  height: 210px;
  transition: transform 0.3s;
  padding: 30px 0 30px 0;
  margin-bottom: 50px;
  margin-left: 10%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    .WebtoonCard2__overlay {
      opacity: 1;
    }
  }

  .Webtoon__poster {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      to top,
      #fdcbf1 0%,
      #fdcbf1 1%,
      #e6dee9 100%
    );
    background-size: cover;
    border-radius: 8px;
  }

  .WebtoonCard2__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 230px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 8px;

    .webtoon-info2 {
      font-size: 13px;
      width: 85%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 13px;
      margin-left: 8px;
      margin-bottom: 20px;
      white-space: nowrap;
      > h4 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .WebtoonCard__purchaseTag {
    width: 50px;
    height: 15px;
    font-size: 10px;
    color: black;
    background-color: white;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    position: absolute;
    top: 45px;
    left: 10px;
    z-index: 2;
  }
`;
// .WebtoonCardSmall {
//   width: 300px;
//   height: 230px;
//   cursor: pointer;
// }
