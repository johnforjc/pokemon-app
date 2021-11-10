import React from "react";
import { Route, Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/pokemon-app/">
        <Route exact path={["/pokemon-app/"]}>
          <h3 className="appName">Pokemon</h3>
        </Route>
        <Route path={["/pokemon-app/detail/:pokemon", "/pokemon-app/mypokemon"]}>
          <div className="backButton">
            <h3>{"<"}</h3>
          </div>
        </Route>
      </Link>
    </header>
  );
};

export default Header;
