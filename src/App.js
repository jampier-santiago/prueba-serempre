// Dependencies
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

import "./styles/style.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
