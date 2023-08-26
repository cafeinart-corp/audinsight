import React, { useState, useEffect } from "react";
import "./BatteryCharging.css"; // Import your CSS file

function BatteryCharging() {
  const [chargeLevel, setChargeLevel] = useState(0);

  useEffect(() => {
    // Simulate charging progress over time
    const interval = setInterval(() => {
      if (chargeLevel < 50) {
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
