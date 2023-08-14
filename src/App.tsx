import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/theme/global";
import { Router } from "./Router";
import { GitHubProvider } from './contexts/GitHubContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle />

      <BrowserRouter>
        <GitHubProvider>
          <Router />
        </GitHubProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
