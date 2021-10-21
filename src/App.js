import { BrowserRouter, Switch, Route , useParams} from "react-router-dom";

import './index.css';

import Basket from "./components/Basket";
import Home from "./components/Home";
import SingleArticlePage from './components/SingleArticlePage';
import CommentListDisplay from "./components/CommentListDisplay";
import Header from "./components/Header";

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
        <Route exact path="/articles/:article_id/comments">
          <Header />
          <CommentListDisplay />
        </Route>
        <Route exact path="/articles/:article_id">
          <SingleArticlePage/>
        </Route>
        <Route >
          <p>404 - Page not found!</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
