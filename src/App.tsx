import { Home } from "./Pages/Home";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/themes/themeDefault";
export const App = () => {
  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
};
