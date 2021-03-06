import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }

    body * {
        transition: 0.3s;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
        color: ${({ theme }) => theme.mainText};
        font-family: "Russo One", sans-serif;
        font-weight: 500;
    }

    p,
    li,
    span,
    label,
    input,
    textarea {
        color: ${({ theme }) => theme.secondaryText};
        font-family: "Roboto Mono", monospace;
    }

    a {
        text-decoration: none;
        color: #17a2b8;
    }

    ul {
        list-style: none;
    }

    h1 {
        font-size: 56px;
    }
    h2 {
        font-size: 36px;
    }
    h3 {
        font-size: 28px;
    }
    h4 {
        font-size: 24px;
    }
    h5 {
        font-size: 20px;
    }
    h6 {
        font-size: 16px;
    }

    section {
        border-bottom: 1px solid ${({ theme }) => theme.borderColor};
        overflow: auto;
    }

    .main-container {
        width: 1200px;
        margin: 0 auto;
    }

    .hidden {
        display: none;
    }

    @media screen and (max-width: 1200px) {
        .main-container {
            width: 95%;
        }
    }`;
