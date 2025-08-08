// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { ref, onValue, push } from "firebase/database";
import GaugeCard from "./GaugeCard";
import ServoProgress from "./ServoProgress";
import DataTable from "./DataTable";

export default function Dashboard({ user, onLogout }) {
  const [data, setData] = useState({});
  const servoLimit = 15;

  useEffect(() => {
    const dataRef = ref(db, "deviceData");
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth);
    onLogout();
  };

  const servos = ["M1", "M2", "M3", "M4", "M5"];

  return (
    <div className="p-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Gauges */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <GaugeCard title="Temperature" value={data.temperature || 0} unit="°C" />
        <GaugeCard title="Humidity" value={data.humidity || 0} unit="%" />
      </div>

      {/* Servo Progress */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {servos.map((servo) => (
          <ServoProgress
            key={servo}
            name={servo}
            value={data[servo] || 0}
            limit={servoLimit}
          />
        ))}
      </div>

      {/* Data Table */}
      <DataTable />
    </div>
  );
}
