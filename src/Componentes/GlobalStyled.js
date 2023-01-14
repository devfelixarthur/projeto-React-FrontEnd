import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: "Inter", sans-serif;
    }
    body{
        width: 100%;
        height: 100vh;
    }
`;
