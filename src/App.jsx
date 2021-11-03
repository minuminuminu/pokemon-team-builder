import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
/* LINE BREAK FOR COMPONENTS/PAGES AND LIBRARIES */
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./pages/ErrorPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";

const FullPage = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <FullPage>
      <BrowserRouter>
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
    </FullPage>
  );
}

export default App;
