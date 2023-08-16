import React from "react";
import { styled } from "styled-components";

const GlobalLayout = ({ children }) => {
  return <StGlobalContainer>{children}</StGlobalContainer>;
};

export default GlobalLayout;

const StGlobalContainer = styled.div`
  margin: 0 auto;
  background-color: #000;
  color: white;
  padding: 80px 300px 0px 20rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1920px) {
    width: 1500px;
  }
  @media (max-width: 1680px) {
    width: 1260px;
  }
  @media (max-width: 1580px) {
    width: 1140px;
  }
  @media (max-width: 1480px) {
    width: 1000px;
  }
  @media (max-width: 1380px) {
    width: 1280px;
  }
  @media (max-width: 1240px) {
    width: 1100px;
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
