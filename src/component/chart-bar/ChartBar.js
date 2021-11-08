import React from "react";
import "./ChartBar.css";

const ChartBar = (prop) => {
  const witdhChart = (prop.baseStat.data / 255) * 100;
  let colorBar = "";

  if (witdhChart <= 33) colorBar = "#ff2b2b";
  else if (witdhChart <= 66) colorBar = "#ffde4a";
  else colorBar = "#28fa28";

  return (
    <div className="chart-bar">
      <div className="chart-bar-row title">{prop.baseStat.header}</div>
      <div className="chart-bar-row content">
        <div className="line" style={{ width: `${witdhChart}%`, background: colorBar }}></div>
      </div>
    </div>
  );
};

export default ChartBar;
