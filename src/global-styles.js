import styled, { createGlobalStyle } from 'styled-components';
import { backgroundColor } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    background-color: ${backgroundColor};
  }
  
  html, body, #root {
    height: 100%;
  }
  
  ul {
    list-style: none;
  }
`;
