import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GlobalLayout } from "../global";
import { useMatch } from "react-router-dom";
import { SearchCard } from "../components/index";

import { fetchSearch } from "../api/MovieApi";
import { fetchWebtoons } from "../api/Webtoon";

const SearchResultPage = () => {
  const [list, setList] = useState([]);
  const [mediaType, setMediaType] = useState("all");
  const [webtoon, setWebtoon] = useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const word = useSelector((state) => {
    return state.search.value;
  });
  // const match = useMatch(`/search/${word}`);

  useEffect(() => {
    const fetchData = async () => {
      const searchResult = await fetchSearch(word);
      if (searchResult) {
        setList(searchResult);
      }
    };
    const fetchWebtoonData = async () => {
      const webtoonData = await fetchWebtoons();
      setWebtoon(webtoonData);
    };

    fetchData();
    fetchWebtoonData();
  }, [word]);

  useEffect(() => {
    if (mediaType === "all") {
      setFilteredResults(list);
    } else if (mediaType === "movie" || mediaType === "tv") {
      const filtered = list.filter((item) => item.media_type === mediaType);
      setFilteredResults(filtered);
    } else if (mediaType === "webtoon") {
      const filteredWebtoonData = webtoon.filter((item) =>
        item.searchKeyword.includes(word)
      );
      console.log("필터웹툰", filteredWebtoonData);
      setFilteredResults(filteredWebtoonData);
    }
  }, [mediaType, list, webtoon]);

  const handleMediaTypeChange = (type) => {
    setMediaType(type);
  };

  return (
    <GlobalLayout>
      <SSRP>
        <div></div>
        <section className="wrapper-filter">
          <div className="container-filter">
            <ul className="filters">
              <li>
                <button
                  type="button"
                  className={mediaType === "all" ? "btn" : "btn2"}
                  onClick={() => handleMediaTypeChange("all")}
                >
                  전체
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={mediaType === "movie" ? "btn" : "btn2"}
                  onClick={() => handleMediaTypeChange("movie")}
                >
                  영화
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={mediaType === "tv" ? "btn" : "btn2"}
                  onClick={() => handleMediaTypeChange("tv")}
                >
                  TV 프로그램
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={mediaType === "webtoon" ? "btn" : "btn2"}
                  onClick={() => handleMediaTypeChange("webtoon")}
                >
                  웹툰
                </button>
              </li>
            </ul>
          </div>
          <hr type="regular" />
        </section>
        {filteredResults.length > 0 && (
          <section className="wrapper-results">
            <ul>
              {filteredResults.map((info, index) => (
                <SearchCard info={info} key={index} />
              ))}
            </ul>
          </section>
        )}
      </SSRP>
    </GlobalLayout>
  );
};

export default SearchResultPage;

const SSRP = styled.main`
  flex: 1;
  display: block;

  .wrapper-filter {
    position: sticky;
    top: 56px;
    z-index: 3;
    background: rgb(0, 0, 0);

    .container-filter {
      margin: 0px auto;
      overflow: hidden;
      padding: 0px;

      .filters {
        display: flex;
        justify-content: flex-start;
        padding-right: 40px;
        padding-left: 40px;
        padding: 0;
        overflow: hidden;
        list-style-type: none;

        .btn {
          display: inline-block;
          position: relative;
          white-space: nowrap;
          color: rgb(255, 255, 255);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0px;
          line-height: 20px;
          padding: 14px 20px;
          outline: none 0;
          background: none;
          border: 0 none transparent;
          cursor: pointer;
        }
        .btn::after {
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 0px;
          left: 0px;
          background: rgb(255, 255, 255);
          width: 100%;
          height: 2px;
        }
        .btn2 {
          display: inline-block;
          position: relative;
          white-space: nowrap;
          color: rgb(255, 255, 255);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0px;
          line-height: 20px;
          padding: 14px 20px;
          outline: none 0;
          background: none;
          border: 0 none transparent;
          cursor: pointer;
        }
      }
    }

    hr {
      background-color: rgb(27, 28, 29);
      width: 100%;
      height: 1px;
      padding: 0px;
      border: none;
      margin: 0px;
    }
  }

  .wrapper-results {
    padding: 22px 40px 0px;

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
  }
`;
