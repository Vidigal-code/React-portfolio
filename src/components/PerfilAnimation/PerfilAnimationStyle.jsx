import styled, {createGlobalStyle} from 'styled-components';
import MatrixFont from "../Font/fam-code.ttf";


export const Div = styled.div`
  width: 600px;
  height: 550px;
`
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MatrixFont';
    src: url('${MatrixFont}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
export const TextAnimate = styled.text`
  font-weight: 500;
  font-family: 'MatrixFont';
  font-style: italic;
  opacity: 0.4;
  fill: ${({theme}) => theme.text_matrix};
`;