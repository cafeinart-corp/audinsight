import React from "react";
import { RadialChart } from "react-vis";
import "react-vis/dist/style.css";

function PieChart() {
  // 데이터 설정 (예제 데이터)
  const data = [
    { angle: 1, label: "A" },
    { angle: 2, label: "B" },
    { angle: 3, label: "C" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Pie Chart Example</h2>
      <RadialChart
        data={data}
        width={300}
        height={300}
        showLabels={true} // 라벨 표시 여부
      />
    </div>
  );
}

export default PieChart;
