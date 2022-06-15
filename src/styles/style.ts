import styled, { createGlobalStyle } from "styled-components";
import only from "../assets/img/ONLY.png";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue',serif;
    font-style: normal;
  }
`;

export const StyledImg = styled.img`
  max-height: 78px;
  max-width: 180px;
  margin-top: 40px;
`;
StyledImg.defaultProps = {
  src: only,
};
