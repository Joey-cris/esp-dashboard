// src/components/DataTable.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue, push } from "firebase/database";

export default function DataTable() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const logsRef = ref(db, "logs");
    onValue(logsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setLogs(data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
      }
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Servo Logs</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Code Name</th>
            <th className="border-b p-2">Date</th>
            <th className="border-b p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => {
            const dateObj = new Date(log.timestamp);
            const date = dateObj.toLocaleDateString("en-GB");
            const time = dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            return (
              <tr key={index}>
                <td className="border-b p-2">{log.code}</td>
                <td className="border-b p-2">{date}</td>
                <td className="border-b p-2">{time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
