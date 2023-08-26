import "react-vis/dist/style.css";
import React, { useState, useEffect } from "react";
import { RadialChart } from "react-vis";
import dummy from "../../data/dummy.json";

function DonutChart() {
  const [dataForChart, setDataForChart] = useState([]);
  const dummyData = dummy.age_ratio_vote;

  useEffect(() => {
    // JSON 데이터를 가공하여 파이 차트의 각도를 계산
    const sum = Object.entries(dummy.age_ratio).map(([category, val]) => {
      return val;
    });
    const allVote = sum.reduce((a, b) => a + b, 0);

    const data = Object.entries(dummyData).map(([category, values]) => ({
      angle: ((values[0] - values[1]) / allVote) * 360,
      label: category * 5 + " ~ " + (category * 5 + 4) + "세",
    }));
    setDataForChart(data);
  }, []);

  return (
    <RadialChart
      data={dataForChart}
      width={300}
      height={300}
      showLabels
      radius={150}
      innerRadius={60} // 중심 부분 비우기 (도넛 차트)
    />
  );
}

export default DonutChart;
