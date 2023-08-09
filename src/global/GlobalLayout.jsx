import React from "react";
import { styled } from "styled-components";

const GlobalLayout = ({ children }) => {
  return <StGlobalContainer>{children}</StGlobalContainer>;
};

export default GlobalLayout;

const StGlobalContainer = styled.div`
  max-width: calc(100vw - 240px);
  margin: 0 auto;
  background-color: #000;
  color: white;
  height: 100%;
  padding: 56px 0px 0px 240px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1700px) {
    max-width: 150rem;
  }
  @media (max-width: 1560px) {
    max-width: 134rem;
  }
  @media (max-width: 1380px) {
    max-width: 120rem;
  }
  @media (max-width: 1240px) {
    max-width: 90%;
  }
`;
