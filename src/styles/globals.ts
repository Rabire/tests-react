import { createGlobalStyle } from 'styled-components';
import { Color, Font, FontSize, FontWeight } from './theme';

export const Theme = createGlobalStyle`
/* THEME */

`;

export const CssReset = createGlobalStyle`
*, ::before, ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    font-size: 62.5%;
}

body {
    background: ${Color.Background};
    color: ${Color.UtilityDark};
    font-family: ${Font.Text};
    font-size: ${FontSize.Regular};
    scroll-behavior: smooth;
}

a, button {
    all: unset;
    cursor: pointer;
    display: block;

    &:disabled {
        opacity: 0.7;
        pointer-events: none;
    }
}

h1, h2, h3 {
    font-size: ${FontSize.Title};
    font-weight: ${FontWeight.Bold}
}
`;
