import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
/* LINE BREAK FOR COMPONENTS/PAGES AND LIBRARIES */
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./pages/ErrorPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";

const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    box-sizing: border-box;
  }
  body{
    background-color:#f0f0f0;
    font-family: 'Open Sans', sans-serif;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="faq">
          <FaqPage />
        </Route>
      </Switch>
      <Route path="*">
        <ErrorPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
