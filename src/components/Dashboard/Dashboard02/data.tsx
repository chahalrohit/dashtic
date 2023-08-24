import React from "react";
import ReactApexChart from "react-apexcharts";
import users2 from "../../../assets/images/users/2.jpg";
import users1 from "../../../assets/images/users/1.jpg";
import users3 from "../../../assets/images/users/3.jpg";
import users4 from "../../../assets/images/users/4.jpg";
import users5 from "../../../assets/images/users/5.jpg";
import users6 from "../../../assets/images/users/6.jpg";
import users7 from "../../../assets/images/users/7.jpg";
import users8 from "../../../assets/images/users/8.jpg";
import users9 from "../../../assets/images/users/9.jpg";
import users10 from "../../../assets/images/users/10.jpg";
import users11 from "../../../assets/images/users/11.jpg";
import users12 from "../../../assets/images/users/12.jpg";
import users13 from "../../../assets/images/users/13.jpg";
import users14 from "../../../assets/images/users/14.jpg";
import users15 from "../../../assets/images/users/15.jpg";
import users16 from "../../../assets/images/users/16.jpg";

export class ApexChart1 extends React.Component<{}, {options:any, series:any }> {
  constructor(props:any) {
    super(props);

    this.state = {
      series: [
        {
          name: "Page Views",
          data: [
            1453, 3425, 7654, 3245, 4532, 5643, 7635, 5465, 6754, 5432, 5435,
            6545,
          ],
        },
        {
          name: "New Visitors",
          data: [
            1123, 2435, 5463, 1245, 3245, 4534, 5435, 3452, 5432, 3452, 2564,
            3456,
          ],
        },
      ],
      options: {
        grid: {
          top: "6",
          right: "0",
          bottom: "17",
          left: "35",
        },
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["var(--primary-bg-color)" || "#4454c3", "#f72d66"],
        plotOptions: {
          bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisLine: {
            lineStyle: {
              color: "rgba(67, 87, 133, .09)",
            },
          },
          axisLabel: {
            fontSize: 10,
            color: "#8e9cad",
          },
        },
        yaxis: {
          title: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(67, 87, 133, .09)",
            },
          },
          axisLabel: {
            fontSize: 10,
            color: "#8e9cad",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          show: true,
          showContent: true,
          alwaysShowContent: true,
          triggerOn: "mousemove",
          trigger: "axis",
          axisPointer: {
            label: {
              show: false,
            },
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
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
export class ApexChart2 extends React.Component<{}, {options:any, series:any }> {
  constructor(props:any) {
    super(props);

    this.state = {
      series: [68, 55, 45],

      options: {
        colors: ["#2dce89", "var(--primary-bg-color)", "#f72d66"],
        legend: {
          show: false,
        },
        stroke: {
          colors: ['rgba(255, 255, 255, 0.2)']
        },
        chart: {
          type: "donut",
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
        />
      </div>
    );
  }
}
export const Radialbar:any = {

  series: [85],

  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#6b88ed"],
      stops: [0, 100],
    },
  },
  options: {
    colors: ["var(--primary-bg-color)"],

    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        track: {
          background: '#c4caee',
      },
      },
    },
  },
};

export const WeekPageViews = [
  {
    class: "w-1",
    icon: "flag flag-us",
    country: "USA",
    num: "6425",
  },
  {
    icon: "flag flag-cn",
    country: "Chaina",
    num: "5582",
  },
  {
    icon: "flag flag-de",
    country: "Germany",
    num: "4587",
  },
  {
    icon: "flag flag-ru",
    country: "Russia",
    num: "2520",
  },
  {
    icon: "flag flag-in",
    country: "India",
    num: "6429",
  },
];
export const CountryTrafficSource = [
  {
    sourceicon: "flag flag-us flag-icon-squared me-2",
    sourcecountry: "United States",
    sourcenum: "4534",
    sourcenum2: "134",
    sourcenum3: "(1.51%)",
    BounceRate: "33.58% ",
    BounceRateicon: <i className="fa fa-caret-up text-success"></i>,
    Exits: "15.47%",
    Exitsicon: <i className="fa fa-caret-up text-success"></i>,
  },
  {
    sourceicon: "flag flag-gb flag-icon-squared me-2",
    sourcecountry: "United Kingdom",
    sourcenum: "5463",
    sourcenum2: "290",
    sourcenum3: "(3.30%)",
    BounceRate: " 9.22% ",
    BounceRateicon: <i className="fa fa-caret-down text-danger"></i>,
    Exits: " 7.99%",
    Exitsicon: <i className="fa fa-caret-up text-success"></i>,
  },
  {
    sourceicon: "flag flag-in flag-icon-squared me-2",
    sourcecountry: "India",
    sourcenum: "6534",
    sourcenum2: "250",
    sourcenum3: "(3.00%)",
    BounceRate: " 20.75%",
    BounceRateicon: <i className="fa fa-caret-down text-danger"></i>,
    Exits: "2.40%",
    Exitsicon: <i className="fa fa-caret-down text-danger"></i>,
  },
  {
    sourceicon: "flag flag-ca flag-icon-squared me-2",
    sourcecountry: "Canada",
    sourcenum: "4532",
    sourcenum2: "216",
    sourcenum3: "(2.79%)",
    BounceRate: " 32.07% ",
    BounceRateicon: <i className="fa fa-caret-up text-success"></i>,
    Exits: " 15.09% ",
    Exitsicon: <i className="fa fa-caret-down text-danger"></i>,
  },
  {
    sourceicon: "flag flag-fr flag-icon-squared me-2",
    sourcecountry: "France",
    sourcenum: "5643",
    sourcenum2: "216",
    sourcenum3: "(2.79%)",
    BounceRate: " 32.07%",
    BounceRateicon: <i className="fa fa-caret-down text-danger"></i>,
    Exits: "15.09%",
    Exitsicon: <i className="fa fa-caret-up text-success"></i>,
  },
  {
    sourceicon: "flag flag-cn flag-icon-squared me-2",
    sourcecountry: "China",
    sourcenum: "6534",
    sourcenum2: "216",
    sourcenum3: "(2.79%)",
    BounceRate: " 32.07% ",
    BounceRateicon: <i className="fa fa-caret-down text-danger"></i>,
    Exits: " 15.09% ",
    Exitsicon: <i className="fa fa-caret-up text-success"></i>,
  },
];

export const MostVisitedPages:any = [
{
  path:"home/index.html",
  img1:users1,
  img2:users2,
  img3:users3,
  img4:users4,
  img5:users5,
  visitors:"3456",
  page:"556",
  bounce:"13.6",
  bounceicon: <i className="fa fa-caret-down text-danger"></i>,
  date:"July 13, 2020"
},
{
  path:"Store/shop/cart.html",
  img1:users6,
  img2:users7,
  img3:users8,
  img4:users9,
  img5:users10,
  visitors:"3456",
  page:"556",
  bounce:"13.6",
  bounceicon: <i className="fa fa-caret-down text-danger"></i>,
  date:"June 15, 2020"
},
{
  path:"Store/shop",
  img1:users11,
  img2:users12,
  img3:users13,
  img4:users14,
  img5:users15,
  visitors:"3456",
  page:"556",
  bounce:"13.6",
  bounceicon: <i className="fa fa-caret-down text-danger"></i>,
  date:"July 8, 2020"
},
{
  path:"home/blog.html",
  img1:users16,
  img2:users2,
  img3:users9,
  img4:users2,
  img5:users4,
  visitors:"3456",
  page:"556",
  bounce:"13.6",
  bounceicon: <i className="fa fa-caret-down text-danger"></i>,
  date:"June 28, 2020"
},
{
  path:"home/blog/blog-overview.html",
  img1:users1,
  img2:users2,
  img3:users3,
  img4:users2,
  img5:users4,
  visitors:"3456",
  page:"556",
  bounce:"13.6",
  bounceicon: <i className="fa fa-caret-down text-danger"></i>,
  date:"July 2, 2020"
}
]