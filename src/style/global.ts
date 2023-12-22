import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html,body {
        font-size:62.5%; //10px
        font-family: "Jalnan2";
        line-height: 1.3;
        color: #333;
    }
    @font-face {
        font-family: "Jalnan2";
        src: url("/fonts/Jalnan2.ttf");
    }
    a {
        text-decoration:none;
    }

    img {
        border-radius: 0.6rem;
    }

    @media screen and (max-width:425px) {
        html,body{
            font-size: 55%;
        }
    }
`;
