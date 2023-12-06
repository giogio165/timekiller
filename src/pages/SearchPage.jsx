import styled from "styled-components";
import { GlobalLayout } from "../global";
import { ContentBox, ContentsTitle, GenreBox } from "../components/index";
import { useEffect, useState } from "react";
import { fetchGenreNames, fetchMoviesWithImages } from "../api/MovieApi";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesWithImages = await fetchMoviesWithImages();
      setMovies(moviesWithImages);
    };

    fetchData();
  }, []);

  const goToActionMovie = () => {
    const actionMovies = movies.filter((movie) => movie.genre_ids.includes(28));
    setFilteredMovies(actionMovies);
  };
  console.log(filteredMovies);
  return (
    <GlobalLayout>
      <SSearchPage>
        <div className="container">
          <div className="container-slider">
            <ContentsTitle title="영화 장르" />
            <div className="container-slide_contents">
              <ul className="contents-genre">
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="액션"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="어드벤쳐"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="애니메이션"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="코미디"
                />
              </ul>
            </div>
          </div>
          <div className="container-slider">
            <ContentsTitle title="드라마 장르" />
            <div className="container-slide_contents">
              <ul className="contents-genre">
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="판타지"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="코미디"
                />

                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="액션"
                />
              </ul>
            </div>
          </div>
          <div className="container-slider">
            <ContentsTitle title="웹툰" />
            <div className="container-slide_contents">
              <ul className="contents-genre">
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="판타지"
                />
                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="코미디"
                />

                <GenreBox
                  img="https://an2-img.amz.wtchn.net/image/v2/eEtmM07lXFYer0NKD_mOYw.png?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSm9Jam95TnpBc0luQWlPaUl2ZGpJdmMzUnZjbVV2YzNablgzUmxiWEJzWVhSbEx6RTJOVGMxTURJeU56STVPREEzTWpFM01ETWlMQ0p6ZG1kZmNHRnlZVzBpT25zaVkyOXNiM0l4SWpvaUl6UTJNVVk1T1NKOUxDSjNJam8zTWpCOS45N0NWclFRbExMcXA4eVBtZFdrWGFEb3UxS0Y2emMtRjFFSk5HMmE0b1Bn"
                  title="액션"
                />
              </ul>
            </div>
          </div>
        </div>
      </SSearchPage>
    </GlobalLayout>
  );
};

export default SearchPage;

const SSearchPage = styled.div`
  .container {
    padding: 32px 0px 0px;

    .container-slider {
      margin: 0 auto;
      max-width: 1680px;
      padding-left: 40px;
      padding-bottom: 32px;
      padding-right: 40px;
      overflow: hidden;

      .container-slide_contents {
        position: relative;

        .contents {
          position: relative;
          z-index: 0;
          white-space: nowrap;
          margin: 0px -8px;
        }

        .btn-left {
          color: rgb(186, 186, 193);
          padding: 0px;
          border: 0px;
          outline: none;
          appearance: none;
          background: linear-gradient(
            90deg,
            rgb(0, 0, 0) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: -10px;
          z-index: 2;
          width: 40px;
          height: 100%;

          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            color: white;
            font-size: 30px;
          }
        }
        .btn-right {
          color: rgb(186, 186, 193);
          padding: 0px;
          border: 0px;
          outline: none;
          appearance: none;
          background: linear-gradient(
            90deg,
            rgb(0, 0, 0) 70%,
            rgba(0, 0, 0, 0) 100%
          );
          position: absolute;
          top: 0px;
          bottom: 0px;
          right: -20px;
          z-index: 2;
          width: 40px;
          height: 100%;
          cursor: pointer;

          span {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            color: white;
            font-size: 30px;
          }
        }
        .contents-genre {
          position: relative;
          z-index: 0;
          white-space: nowrap;
          margin: 0px -6px;
        }
      }
    }
  }
`;
