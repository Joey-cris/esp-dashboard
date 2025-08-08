// src/components/ServoProgress.js
import React from "react";

export default function ServoProgress({ name, value, limit }) {
  const percent = (value / limit) * 100;
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h3 className="font-bold mb-2">{name}</h3>
      <div className="relative w-20 h-20 mx-auto">
        <svg className="transform -rotate-90 w-20 h-20">
          <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="none" />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={2 * Math.PI * 36}
            strokeDashoffset={2 * Math.PI * 36 * (1 - value / limit)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-bold">
          {value}/{limit}
        </span>
      </div>
    </div>
  );
}
