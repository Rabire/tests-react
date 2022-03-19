import { createGlobalStyle } from "styled-components";
import { Color, Font, FontSize, FontWeight } from "./theme";

export const GlobalStyle = createGlobalStyle`
/* CSS RESET */
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${Color.UtilityDark};
    font-family: ${Font.Text};
    font-size: ${FontSize.Regular};
    font-weight: ${FontWeight.Regular};
}

html {
  font-size: 1rem;
}

body {
    font-size: ${FontSize.Small};
    scroll-behavior: smooth;
    background: ${Color.Background};
}

a, button {
    all: unset;
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        pointer-events: none;
    }
}

h1, h2, h3 {
    font-size: ${FontSize.Title};
}

/* THEME */

`;
