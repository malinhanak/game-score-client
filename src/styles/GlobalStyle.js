import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, p, button, article, section, input {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }

  a {
    font-family: 'Montserrat', sans-serif;
  }

  header#header-hook {
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;

    max-height: 96px;
    width: 100%;
  }

  footer#footer-hook {
    position: fixed;
    z-index: 15;
    bottom: 0;
    left: 0;

    height: 96px;
    max-height: 96px;
    width: 100%;

    background-color: ${(props) => props.theme.colors.mosque};
    color: ${(props) => props.theme.colors.jetStream};
  }

  main#root {
    margin-top: 96px;
  }


  .main-navigation__drawer-nav {
    height: 100%;
  }

  .side-drawer {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100vh;
    width: 70%;
    background: ${(props) => props.theme.colors.wildSand};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .slide-in-left-enter {
    transform: translateX(-100%);
  }

  .slide-in-left-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms;
  }

  .slide-in-left-exit {
    transform: translateX(0%);
    opacity: 1;
  }

  .slide-in-left-exit-active {
    transform: translateX(-100%);
    opacity: 0;
    transition: all 200ms;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.backdrop};
    z-index: 10;
  }

  @media (min-width: 768px) {
    .main-navigation__menu-btn {
      display: none;
    }
  }
`;
