import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GlobalLayout } from "../global";
import { useParams, useMatch } from "react-router-dom";
import { SearchCard } from "../components";

const SearchResultPage = () => {
  const [list, setList] = useState([]);
  const word = useSelector((state) => {
    return state.search.value;
  });
  const match = useMatch(`/search/${word}`);

  const fetchSearch = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQ4MGY5NTM0MDFkYjYwZTU1M2U0MTI4NGY1ZjQwNyIsInN1YiI6IjYzNjBmZGI4NDBkMGZlMDA4MjY3ZjUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tfm55H9d6vX72r5ZgVUk2HlkmK15hVNdfCiP7NkgWnQ",
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${word}&include_adult=false&language=ko-KR&page=1`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error:", error);
      return null;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const searchResult = await fetchSearch();
      if (searchResult) {
        setList(searchResult.results);
      }
    };
    fetchData();
  }, []);
  return (
    <GlobalLayout>
      <SSRP>
        <div></div>
        <section className="wrapper-filter">
          <div className="container-filter">
            <ul className="filters">
              <li>
                <button type="button" className="btn">
                  인기
                </button>
              </li>
              <li>
                <button type="button" className="btn">
                  영화
                </button>
              </li>
              <li>
                <button type="button" className="btn">
                  TV 프로그램
                </button>
              </li>
              <li>
                <button type="button" className="btn">
                  웹툰
                </button>
              </li>
            </ul>
          </div>
          <hr type="regular" />
        </section>
        {list && (
          <section className="wrapper-results">
            <ul>
              {list.map((info, index) => (
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
