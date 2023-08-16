import React from "react";
import { styled } from "styled-components";

const GlobalLayout = ({ children }) => {
  return <StGlobalContainer>{children}</StGlobalContainer>;
};

export default GlobalLayout;

const StGlobalContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: #000;
  color: white;
  height: 100%;
  padding: 80px 300px 0px 550px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1700px) {
    max-width: calc(1680px - 50%);
  }
  @media (max-width: 1560px) {
    max-width: 1500px;
  }
  @media (max-width: 1380px) {
    max-width: 120rem;
  }
  @media (max-width: 1240px) {
    max-width: 90%;
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
