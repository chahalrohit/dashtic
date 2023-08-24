import React from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface RadialbarProps {
  options?: ApexOptions,
  series?: ApexOptions['series'],
}

export const Radialbar: RadialbarProps = {

  series: [85],
  options: {
    colors: ["var(--primary-bg-color)"],
    chart: {
      type: "radialBar",
      width: 50,
      height: 50,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
        },
        track: {
          margin: 0,
        },
        dataLabels: {
          show: false,
        },
      },
    },
  },
};

export const Round = () => {
  return (
    <ReactApexChart
      options={Radialbar.options}
      series={Radialbar.series}
      className="chart-circle chart-circle-sm chart-circle-primary ms-0 me-5"
      type="radialBar"
      height={80}
      width={80}
    />
  );
};
