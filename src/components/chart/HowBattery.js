import React, { useState, useEffect } from "react";
import "./BatteryCharging.css"; // Import your CSS file
import dummy from "../../data/dummy.json";

function BatteryCharging() {
  const val = dummy.age_ratio_vote[4];
  const sum = Object.entries(dummy.age_ratio).map(([category, val]) => {
    return val;
  });
  const allVote = sum.reduce((a, b) => a + b, 0);

  const res = ((val[0] - val[1]) / allVote) * 100;
  console.log(res);
  const [chargeLevel, setChargeLevel] = useState(0);

  useEffect(() => {
    // Simulate charging progress over time
    const interval = setInterval(() => {
      if (chargeLevel < res) {
        setChargeLevel(chargeLevel + 1);
      }
    }, 10); // Adjust the interval as needed

    return () => {
      clearInterval(interval);
    };
  }, [chargeLevel]);

  return (
    <div className="battery-charging item-center">
      <svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
        {/* Rotate the entire SVG by 90 degrees */}
        <g transform="rotate(0)">
          {/* Battery outline */}
          <rect
            x="10"
            y="25"
            width="380"
            height="50"
            rx="10"
            ry="10"
            fill="whitesmoke"
          />

          {/* Charging progress */}
          <rect
            x="10"
            y="25"
            width={chargeLevel * 3.8}
            height="50"
            rx="10"
            ry="10"
            fill="royalblue"
          />
        </g>
      </svg>
    </div>
  );
}

export default BatteryCharging;
