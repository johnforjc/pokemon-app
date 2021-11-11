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
        <Link to="/pokemon-app/">
          <div className="nav-list">Pokedex</div>
        </Link>
        <Link to="/pokemon-app/mypokemon">
          <div className="nav-list">My Pokemon</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
