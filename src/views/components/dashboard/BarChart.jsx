import React, { useState, useEffect } from "react";
import { useTheme } from "@amcharts/amcharts4/core";
import { create, XYChart } from "@amcharts/amcharts4/charts";
import { CategoryAxis, ValueAxis, ColumnSeries, Legend } from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import data from "../../../stores/common/charts/data";
import * as am4core from '@amcharts/amcharts4/core';

const BarChart = () => {
  const theme = useTheme(am4themes_animated);
  const [chart, setChart] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const xyChart = am4core.create(document.getElementById("chartDiv"), XYChart);
    xyChart.data = data.barChartData;
    setChart(xyChart);

    const categoryAxis = xyChart.xAxes.push(new CategoryAxis());
    categoryAxis.dataFields.category = "category";

    const valueAxis = xyChart.yAxes.push(new ValueAxis());

    const series = xyChart.series.push(new ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";

    xyChart.legend = new Legend();

    return () => {
      if (xyChart) {
        xyChart.dispose();
      }
    };
  }, []); 

  useEffect(() => {
    if (chart) {
      if (selectedCategory === "All") {
        chart.data = data.barChartData;
      } else {
        chart.data = data.barChartData.filter((item) => item.category === selectedCategory);
        console.log(chart.data)
      }
    }
  }, [selectedCategory, chart]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Select Category:</label>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          <option value="Category C">Category C</option>
        </select>
      </div>
      <div id="chartDiv" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default BarChart;
