import { fontFamily } from "@mui/system";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./donut-chart.css";

export class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height="100%"
        />
      </div>
    );
  }
}
