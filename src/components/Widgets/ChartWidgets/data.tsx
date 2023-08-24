import React from "react";
import ReactApexChart from "react-apexcharts";
import { Chart as ChartJS, registerables } from "chart.js";
import { ApexOptions } from "apexcharts";
ChartJS.register(...registerables);


interface spark3 {
  optionsSpark3?: ApexOptions,
  seriesSpark3?: ApexOptions['series'],
  series6?: ApexOptions['series'],
  options6?: ApexOptions,
  labels?: string[]
}

export class ApexChart3 extends React.Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
      var sparklineData2= [
        0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62,
        51, 35, 41, 35, 27,
      ];
      this.state = {
        seriesSpark3: [
          {
            data: sparklineData2,
          },
        ],
        optionsSpark3: {
          chart: {
            type: "area",
  
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
          },
          fill: {
            opacity: 0.3,
          },
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          yaxis: {
            min: 0,
          },
          title: {
            offsetX: 0,
          },
        },
      };
    }
  
    render() {
      return (
        <ReactApexChart
          options={this.state.optionsSpark3}
          series={this.state.seriesSpark3}
          type="area"
          height={60}
          width={160}
        />
      );
    }
  }
  
  export class ApexChart4 extends React.Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
      var sparklineData2 = [
        0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 45, 54, 38, 56, 24, 65,
        31, 37, 39, 62, 51,
      ];
      this.state = {
        seriesSpark3: [
          {
            data: sparklineData2,
          },
        ],
        optionsSpark3: {
          chart: {
            type: "area",
  
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
          },
          fill: {
            opacity: 0.3,
          },
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          colors: ["#31ce8b"],
          yaxis: {
            min: 0,
          },
          title: {
            offsetX: 0,
          },
        },
      };
    }
  
    render() {
      return (
        <ReactApexChart
          options={this.state.optionsSpark3}
          series={this.state.seriesSpark3}
          type="area"
          height={60}
          width={160}
        />
      );
    }
  }
  
  export class ApexChart5 extends React.Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
      var sparklineData2 = [
        0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
        27, 54, 43, 19, 46,
      ];
      this.state = {
        seriesSpark3: [
          {
            data: sparklineData2,
          },
        ],
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        optionsSpark3: {
          chart: {
            type: "area",
  
            sparkline: {
              enabled: true,
            },
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
          },
         
          colors: ["#ff5c51"],
          xaxis: {
            crosshairs: {
              width: 1,
            },
          },
          yaxis: {
            min: 0,
          },
          title: {
            offsetX: 0,
          },
        },
      };
    }
  
    render() {
      return (
        <ReactApexChart
          options={this.state.optionsSpark3}
          series={this.state.seriesSpark3}
          type="area"
          height={60}
          width={160}
        />
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
            size: "50%",
          },
        },
      },
    },
  };
  export const Radialbar1:any = {
  
    series: [60],
  
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#2dce89"],
        stops: [0, 100],
      },
    },
    options: {
      colors: ["#2dce89"],
  
      stroke: {
        lineCap: "round",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
        },
      },
    },
  };
  export const Radialbar2:any = {

    series: [70],
  
    fill: { 
      colors: ["#000"],
      opacity: 0.1,
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        
        stops: [0, 100],
      },
    },
    options: {
      colors: ["#f72d66"],
      stroke: {
        lineCap: "round",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
        },
      },
    },
  };
 export  class Salesbar extends React.Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);

      this.state = {
        series6: [{
          data: [2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4,3,5,4,3,4,5,]
        }],
        options6: {
          chart: {
            type: 'bar',
            sparkline: {
              enabled: true
            }
          },
          colors:["#4454c3"],
          plotOptions: {
           
            bar: {
              columnWidth: '50%'
            }
          },
          xaxis: {
            crosshairs: {
              width: 1
            },
          },
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            
            marker: {
              show: false
            }
          }
        },
      
      };
    }

  

    render() {
      return (
        

  <div>

<ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={40} width="100%" />
</div>

      );
    }
  }
  export  class Profitsbar extends React.Component<{}, {options6:any, series6:any}> {
    constructor(props:any) {
      super(props);

      this.state = {
        series6: [{
          data: [2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4,3,5,4,3,4,5,]
        }],
        options6: {
          chart: {
            type: 'bar',
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
           
            bar: {
              columnWidth: '50%'
            }
          },
          colors:["#f7346b"],
          xaxis: {
            crosshairs: {
              width: 1
            },
          },
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (seriesName:any) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          }
        },
      
      };
    }

  

    render() {
      return (
        

  <div>

<ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={40} width="100%" />
</div>
      


      );
    }
  }
  export  class Ordersbar extends React.Component<{}, {options6:any, series6:any}> {
    constructor(props:any) {
      super(props);

      this.state = {
        series6: [{
          data: [2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4,3,5,4,3,4,5,]
        }],
        options6: {
          chart: {
            type: 'bar',
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
           
            bar: {
              columnWidth: '50%'
            }
          },
          colors:['#2dce89'],
          xaxis: {
            crosshairs: {
              width: 1
            },
          },
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (seriesName:any) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          }
        },
      
      };
    }

  

    render() {
      return (
        

  <div>

<ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={40} width="100%" />
</div>
      


      );
    }
  }
  export  class Revenuebar extends React.Component<{}, {options6:any, series6:any}> {
    constructor(props:any) {
      super(props);

      this.state = {
        series6: [{
          data: [2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4,3,5,4,3,4,5,]
        }],
        options6: {
          chart: {
            type: 'bar',
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
           
            bar: {
              columnWidth: '50%'
            }
          },
          colors:['#45aaf2'],
          xaxis: {
            crosshairs: {
              width: 1
            },
          },
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function (seriesName:any) {
                  return ''
                }
              }
            },
            marker: {
              show: false
            }
          }
        },
      
      };
    }

  

    render() {
      return (
        

  <div>

<ReactApexChart options={this.state.options6} series={this.state.series6} type="bar" height={40} width="100%" />
</div>
      


      );
    }
  }


  export const Bitcoinexhange:any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  export const bitcoinexchange:any = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    type: "line",
    datasets: [
      {
        data: [83,56,89, 73, 61, 75, 86, 56],
        label: "Bitcoin Price",
        backgroundColor: "rgb(68, 84, 195,0.06)",
        borderColor: "rgba(68, 84, 195,0.6)",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  
  export const Bitcoinexhange2:any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  export const bitcoinexchange2:any = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    type: "line",
    datasets: [
      {
        data: [45,78,67,78,36,78,89,84],
        label: "Bitcoin Price",
        backgroundColor: "rgb(68, 84, 195,0.06)",
        borderColor: "rgba(68, 84, 195,0.6)",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  
  export const Bitcoinexhange3:any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  export const bitcoinexchange3:any = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    type: "line",
    datasets: [
      {
        data: [56,78,36,78,29,78,37,56],
        label: "Bitcoin Price",
        backgroundColor: "rgb(68, 84, 195,0.06)",
        borderColor: "rgba(68, 84, 195,0.6)",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  
  export const Bitcoinexhange4:any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  export const bitcoinexchange4:any = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    type: "line",
    datasets: [
      {
        data: [45,78,98,34,67,28,89,45],
        label: "Bitcoin Price",
        backgroundColor: "rgb(68, 84, 195,0.06)",
        borderColor: "rgba(68, 84, 195,0.6)",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        fill: true,
        tension: 0.4,
      },
    ],
  };