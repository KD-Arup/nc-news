import { BrowserRouter, Switch, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Home from "./components/Home";

import './index.css';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/basket">
          <Basket/>
        </Route>
        <Route >
          <p>404 - Page not found!</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
