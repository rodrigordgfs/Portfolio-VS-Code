import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem "Montserrat", sans-serif;
    }`
