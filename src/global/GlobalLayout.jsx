import React from "react";
import { styled } from "styled-components";

const GlobalLayout = ({ children }) => {
  return <StGlobalContainer>{children}</StGlobalContainer>;
};

export default GlobalLayout;

const StGlobalContainer = styled.div`
  max-width: 160rem;
  width: 100%;
  margin: 0 auto;
  font-size: 20px;
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
