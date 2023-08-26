import "react-vis/dist/style.css";
import React, { useState, useEffect } from "react";
import { RadialChart } from "react-vis";
// import dummy from "../../data/dummy.json";
import axios from "axios";

function DonutChart() {
  const [data, setData] = useState(null); // 데이터 초기 상태를 null로 설정
  const [dataForChart, setDataForChart] = useState([]);
  useEffect(() => {
    axios
      .get("https://cafeinart.du.r.appspot.com/v1/artwork/1/da?format=json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      updateChartData();
    }
  }, [data]);

  const updateChartData = () => {
    const dummyData = data.da_data.age_ratio_vote;
    // JSON 데이터를 가공하여 파이 차트의 각도를 계산
    const sum = Object.entries(data.da_data.age_ratio).map(
      ([category, val]) => {
        return val;
      }
    );
    const allVote = sum.reduce((a, b) => a + b, 0);

    const da = Object.entries(dummyData).map(([category, values]) => ({
      angle: ((values[0] - values[1]) / allVote) * 360,
      label: category * 5 + " ~ " + (category * 5 + 4) + "세",
    }));
    setDataForChart(da);
  };

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
