import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  
}

body {
  height:100vh;
  background:  rgba(190,240,203,1);
  display: flex;
  justify-content: center;
  align-items: center;
}
`