import '@styles/fonts/css/pretendardvariable.css';
import emotionNormalize from 'emotion-normalize';
import { css } from '@emotion/react';
import { themes, themeCss } from '@/theme';
const { colorCss, buildCss } = themeCss;

const GlobalStyles = css`
  ${emotionNormalize}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard Variable';
    -webkit-tap-highlight-color: transparent;
  }
  :root {
    ${buildCss}
    ${colorCss.standard}
    transition: 0.125s all ease-in;
    scroll-padding-top: 64px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    touch-action: manipulation;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${colorCss.dark};
      background-color: var(--background-default);
    }
  }

  @media (prefers-color-scheme: light) {
    body {
      ${colorCss.light};
      background-color: var(--background-default);
    }
  }

  body[data-theme='light'] {
    ${colorCss.light};
    background-color: var(--background-default);
  }
  body[data-theme='dark'] {
    ${colorCss.dark};
    background-color: var(--background-default);
  }

  html,
  body {
    scroll-behavior: smooth;
    padding: 0;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    color: var(--text-default);
  }

  p {
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    outline: none;
    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
  img {
    object-fit: cover;
  }
  button {
    font-family: inherit;
    outline: none;
    border: none;
    color: inherit;
    cursor: pointer;
    background-color: transparent;
  }
  input,
  textarea {
    font-family: inherit;
  }

  textarea {
    resize: none;
  }

  #storybook-docs > div {
    background: none;
  }
  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

export { GlobalStyles };
