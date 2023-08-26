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
import data from "../../data/dummy.json";

function LineMarkChart() {
  const [dataForChart, setDataForChart] = useState([]);

  useEffect(() => {
    updateChartData();
  }, []);

  useEffect(
    () => {
      // Check if any relevant props have changed
      // Replace 'someProp' with the actual prop you want to compare
      // For example, if you have a prop 'someProp', you can replace it like this:
      // if (prevProps.someProp !== this.props.someProp) {
      //   updateChartData();
      // }
    },
    [
      /* Add the relevant props here */
    ]
  );

  const updateChartData = () => {
    const dailyViewer = data.daily_viewer;
    const dataForChart = [];

    for (const date in dailyViewer) {
      if (dailyViewer.hasOwnProperty(date)) {
        dataForChart.push({ x: date, y: dailyViewer[date] });
      }
    }

    setDataForChart(dataForChart);
  };

  return (
    <div className="self-stretch flex flex-col items-center justify-start">
      <XYPlot xType="ordinal" width={500} height={400}>
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
