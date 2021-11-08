import React from "react";
import "./Details.css";
import Table from "./../../component/Table/Table";
import Type from "../../component/Type/Type";
import ChartBar from "../../component/chart-bar/ChartBar";

const Details = () => {
  const data = [
    {
      header: "Height",
      content: "0.7m",
    },
    {
      header: "Weight",
      content: "6.9kg",
    },
    {
      header: "Held Items",
      content: "Not Found",
    },
    {
      header: "Ability",
      content: "Overgrow, Chlorophyll",
    },
  ];

  return (
    <div className="detail-box">
      {/* <div className="tab">
        <div className="tab-content">Base Stat</div>
        <div className="tab-content">Ability</div>
      </div> */}

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />

      <Type type="normal" />

      <Table data={data} />

      <ChartBar header="HP" data="70" />
      <ChartBar header="Attack" data="144" />
      <ChartBar header="Sp. Attack" data="200" />

      {/* <div className="table">
        <div className="table-column">
          <div className="table-row title">Height</div>
          <div className="table-row content">0.7m</div>
        </div>
        <div className="table-column">
          <div className="table-row title">Weight</div>
          <div className="table-row content">6.9kg</div>
        </div>
        <div className="table-column">
          <div className="table-row title">Held Items</div>
          <div className="table-row content">Not Found</div>
        </div>
        <div className="table-column">
          <div className="table-row title">Ability</div>
          <div className="table-row content">Overgrow, Chlorophyll, hahhaha</div>
        </div>
      </div> */}
    </div>
  );
};

export default Details;
