import { fontFamily } from "@mui/system";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./donut-chart.css";



export function DonutChart(props) {

  const chartData = {
    series: props.values,
    options: {
      labels: props.labels,
      chart: {
        type: "donut",
      },
      colors: props.colors,
      fill: {
        colors: props.colors,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          expandOnClick: true,
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: "20px",
                fontFamily: "Manrope, Arial",
                fontWeight: 600,
              },
            },
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "18px",
        fontFamily: "Manrope, Arial",
        fontWeight: 600,
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },
    },
  };
  

    return (
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          height="100%"
        />
      </div>
    );
  }

