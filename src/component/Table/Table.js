import React from "react";
import "./Table.css";

import "./TableColumn";
import TableColumn from "./TableColumn";

const Table = (props) => {
  return (
    <div className="table">
      {props.data.map((item) => (
        <TableColumn data={item} />
      ))}
    </div>
  );
};

export default Table;
