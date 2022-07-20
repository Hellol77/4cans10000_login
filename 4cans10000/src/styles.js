import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import GmarketSansTTFMedium from "./fonts/GmarketSansTTFMedium.woff";
export const GlobalStyle = createGlobalStyle`
${reset}
    body{
        background-color: rgb(243,250,242);
        font-family:'GmarketSansMedium';
    }
    @font-face {
    font-family: 'GmarketSansMedium';
    src: url(${GmarketSansTTFMedium}) format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
