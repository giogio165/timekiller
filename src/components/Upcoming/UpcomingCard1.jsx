import React from "react";
import styled from "styled-components";

const UpcomingCard1 = ({ it }) => {
  return (
    <SUpcomingCardWrapper>
      <SUpcomingImgWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${it.backdrop_path}`}
          alt={`${it.original_title} Poster`}
        />
      </SUpcomingImgWrapper>

      <h2>{it.overview}</h2>
    </SUpcomingCardWrapper>
  );
};

export default UpcomingCard1;

const SUpcomingCardWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0 0 0;
  cursor: pointer;

  /* &:hover {
    transform: scale(1.1);
  } */

  @media (max-width: 1500px) {
    margin: 20px 0 0 190px;
  }

  > h2 {
    position: absolute;
    width: 400px;
    padding: 10px;
    top: 380px;
    left: 10px;
    z-index: 2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }
`;

const SUpcomingImgWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  z-index: 1;
  width: 20%;
  height: "450px"
  backgroundRepeat: "no-repeat"
  backgroundSize: "cover"
  borderRadius: "8px"
`;
