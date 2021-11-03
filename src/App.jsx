import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./pages/ErrorPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
