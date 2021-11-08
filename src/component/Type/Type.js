import React from "react";
import "./type.css";

const Type = (props) => {
  return <div className={`type-label ${props.type}`}>{props.type.toUpperCase()}</div>;
};

export default Type;
