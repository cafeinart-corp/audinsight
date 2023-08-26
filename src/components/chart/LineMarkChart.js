import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LineMarkSeries,
  AreaSeries,
  GradientDefs,
} from "react-vis";
import "react-vis/dist/style.css";
import axios from "axios";

function LineMarkChart() {
  const [data, setData] = useState(null); // 데이터 초기 상태를 null로 설정
  const [dataForChart, setDataForChart] = useState([]); // 차트 데이터 초기 상태를 빈 배열로 설정

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

  // 데이터가 업데이트되면 차트 데이터도 업데이트
  useEffect(() => {
    if (data) {
      updateChartData();
    }
  }, [data]);

  const updateChartData = () => {
    const dailyViewer = data.da_data.daily_viewer;
    const dataForChart = [];

    for (const date in dailyViewer) {
      if (dailyViewer.hasOwnProperty(date)) {
        dataForChart.push({ x: date, y: dailyViewer[date] });
      }
    }

    setDataForChart(dataForChart);
  };

  if (!data) {
    // 데이터가 로딩 중일 때 로딩 상태를 표시
    return <div>Loading...</div>;
  }

  return (
    <div className="self-stretch flex flex-col items-center justify-start">
      <XYPlot
        xType="ordinal"
        width={500}
        height={(400 * 2) / 3}
        margin={{ left: 50, bottom: 50 }}
      >
        <GradientDefs>
          <linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#266EF1" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#266EF1" stopOpacity={0} />
          </linearGradient>
        </GradientDefs>
        <XAxis title="Date" />
        <YAxis title="Amount" />
        <LineMarkSeries data={dataForChart} curve="curveMonotoneX" />
        <AreaSeries
          data={dataForChart}
          curve="curveMonotoneX"
          color={"url(#area-fill)"}
        />
      </XYPlot>
    </div>
  );
}

export default LineMarkChart;
