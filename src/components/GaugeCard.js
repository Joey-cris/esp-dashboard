// src/components/GaugeCard.js
import React from "react";
import GaugeChart from "react-gauge-chart";

export default function GaugeCard({ title, value, unit }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <GaugeChart
        id={`gauge-${title}`}
        nrOfLevels={20}
        percent={value / 100}
        textColor="#000"
      />
      <p className="text-center mt-2 text-xl font-semibold">
        {value} {unit}
      </p>
    </div>
  );
}
