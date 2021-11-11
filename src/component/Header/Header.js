import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isActive, setisActive] = useState(false);

  const toogleActiveHandler = () => {
    setisActive(!isActive);
  };

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

      <div className={!isActive ? "container" : "container change"} onClick={toogleActiveHandler}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <nav className={!isActive ? "active" : ""}>
        <div className="nav-list">
          <Link to="/pokemon-app/">Pokedex</Link>
        </div>
        <div className="nav-list">
          <Link to="/pokemon-app/mypokemon">My Pokemon</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
