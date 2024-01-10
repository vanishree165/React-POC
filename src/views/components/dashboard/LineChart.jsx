import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useTheme } from "@amcharts/amcharts4/core";
import { create, XYChart } from "@amcharts/amcharts4/charts";
import { CategoryAxis, ValueAxis, LineSeries, Legend,ColumnSeries } from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { setSelectedCategory } from "../../../stores/common/charts/ChartAction";
import * as am4core from '@amcharts/amcharts4/core';

const LineChart = ({ selectedCategory, dispatch, chartData }) => {
  const theme = useTheme(am4themes_animated);

  useEffect(() => {
    const xyChart = createChart(chartData);
    return () => {
      if (xyChart) {
        xyChart.dispose();
      }
    };
  }, [chartData]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    dispatch(setSelectedCategory(newCategory));
  };

  const createChart = (data) => {
    const xyChart = am4core.create(document.getElementById("chartDiv1"), XYChart);
    xyChart.data = data;
    console.log("Chart Data:", xyChart.data);
    console.log("Chart Configuration:", xyChart);
    const categoryAxis = xyChart.xAxes.push(new CategoryAxis());
    categoryAxis.dataFields.category = "category";

    const valueAxis = xyChart.yAxes.push(new ValueAxis());

    const series = xyChart.series.push(new ColumnSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";

    xyChart.legend = new Legend();

    return xyChart;
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
      <div id="chartDiv1" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCategory: state.charts.selectedCategory,
  chartData: state.charts.chartData,
});

export default connect(mapStateToProps)(LineChart);
