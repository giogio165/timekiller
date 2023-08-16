import { useNavigate } from "react-router-dom";
import React from "react";
import MovieInfoButton from "./MovieInfoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const WebtoonCard = ({ it, number }) => {
  // number는 WebtoonPage에서 넘어옴, Carousel에 들어갈 아이템 갯수/ it은 webtoon
  console.log(it);
  const navigate = useNavigate();
  const toDetailPage = () => {
    navigate("/detail");
  };
  const w = window.innerWidth;
  const cardClassName =
    number === 3
      ? w <= 1500
        ? "WebtoonCardSmall"
        : "WebtoonCard"
      : "WebtoonCard2";

  return (
    <div>
      {number === 3 ? ( // 첫번째 webtoon Carousel
        <div>
          <div className="webtoon-info">
            <div className="WebtoonCard__subtitle">왓차오리지널 웹툰</div>
            <div className="WebtoonCard__title">{it.title}</div>
          </div>
          <div className={cardClassName} onClick={toDetailPage}>
            <div className="WebtoonCard__img-wrapper">
              <img
                src={it.img}
                alt={`${it.title} Poster`}
                className="Webtoon__poster"
              />
              <div className={cardClassName + "__overlay"}></div>
              <div className="WebtoonCard__freeTag">전체 무료</div>
            </div>
          </div>
        </div>
      ) : (
        //두번째 webtoon Carousel
        <div className={cardClassName} onClick={toDetailPage}>
          <div className="WebtoonCard__img-wrapper">
            <div className="WebtoonCard__purchaseTag">개별구매</div>
            <img
              src={it.img}
              alt={`${it.title} Poster`}
              className="Webtoon__poster"
            />
            <div className={cardClassName + "__overlay"}>
              <div className="webtoon-info2">
                <MovieInfoButton />
                <h3 className="WebtoonCard2__title">{it.title}</h3>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default WebtoonCard;

const SWebtoonCard = styled.div`
  width: 450px;
  height: 230px;
  cursor: pointer;
`;
