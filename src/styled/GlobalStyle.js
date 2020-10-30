import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import Montserratlight from "../assets/fonts/Montserrat-Light.ttf";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";
const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400; 
    font-style: normal;
    src: url(${MontserratRegular}) format('truetype');
 }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 300; 
    font-style: normal;
    src: url(${Montserratlight}) format('truetype');
 }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 500; 
    font-style: normal;
    src: url(${MontserratMedium}) format('truetype');
 }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 600; 
    font-style: normal;
    src: url(${MontserratSemiBold}) format('truetype');
 }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 700; 
    font-style: normal;
    src: url(${MontserratBold}) format('truetype');
 }
  body {
        font-family: Montserrat;
        font-size: 1em;
        color: ${(props) => props.theme.color.mainColor}
  }
  *{
    box-sizing:border-box;
    
  }

  a{
    text-decoration: none;
  }
  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;
