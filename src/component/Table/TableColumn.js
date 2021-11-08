import React from "react";

const TableColumn = (props) => {
  return (
    <div className="table-column">
      <div className="table-row title">{props.data.header}</div>
      <div className="table-row content">{props.data.content}</div>
    </div>
  );
};

export default TableColumn;
