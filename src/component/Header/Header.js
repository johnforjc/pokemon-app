import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/pokemon-app/">
        <h1 className="appName">PoKeMoN</h1>
      </Link>
    </header>
  );
};

export default Header;
