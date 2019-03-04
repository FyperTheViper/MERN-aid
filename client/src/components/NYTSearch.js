import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Results from "./Results";
import SavedBooks from "./SavedBooks";
import NavBar from "./Navbar";

const NYTSearch = () => (
  <div className="container pb-5">
    <NavBar />
    <Header />
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ Results } />
        <Route exact path="/saved" component={ SavedBooks } />
      </Switch>
    </div>
    </Router>
  </div>
);

export default NYTSearch;
