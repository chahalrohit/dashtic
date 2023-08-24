import { EChartsOption } from "echarts-for-react";

interface EchartsState {
  option:  EChartsOption;
}

//echart1
export const echart1: EchartsState = {
    option: {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        left: "6%",
        right: "3%",
        bottom: "8%",
        top: "3%",
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          // prettier-ignore
          data: [2014,2015,2016,2017,2018],
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            },
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
        {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            },
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
        {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            },
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: [10, 15, 9, 18, 10],
          color:'#4454c3',
        },
        {
          type: "bar",
          data: [10, 14, 10, 15, 9],
          color:"#767fbf",
        },
        {
          type: "line",
          data: [8, 5, 25, 10, 10],
          smooth: true,
          color:'#424e79'
        },
      ],
    },
  };
  //echart2
  export const echart2: EchartsState = {
    option: {
      legend: {},
      grid: {
        top: 70,
        bottom: 50,
        left: "6%",
      },
      xAxis: [
        {
          type: "category",
          // prettier-ignore
          data: ['2014','2015','2016','2017','2018'],
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
        },
      ],
      series: [
        {
          type: "line",
          smooth: true,
          data: ["12", "25", "12", "35", "12", "20"],
          color:'#a5ace2'
        },
        {
          type: "line",
          smooth: true,
          data: ["9", "11", "28", "10", "10", "15"],
          color:'#4454c3'
        },
      ],
    },
  };
  //echart3
  export const echart3: EchartsState = {
    option: {
      grid: {
        left: "6%",
        right: "3%",
        bottom: "8%",
        top: "3%",
      },
  
      xAxis: [
        {
          type: "value",
          axisTick: {
            alignWithLabel: true,
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
          // prettier-ignore
          data: [ '2014', '2015', '2016', '2017', '2018'],
        },
      ],
      yAxis: [
        {
          type: "category",
          splitLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
        {
          type: "value",
          splitLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
        {
          type: "value",
          splitLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
      ],
      series: [
        {
          type: "bar",
          data: [10, 15, 9, 18, 10],
          color:'#4454c3',
        },
        {
          type: "bar",
          data: [10, 14, 10, 15, 9],
          color:'#767fbf',
        },
        {
          type: "line",
          data: [8, 5, 25, 10, 10],
          color:'#424e79',
          smooth: true,
        },
      ],
    },
  };
  //echart4
  export const echart4: EchartsState = {
    option: {
      legend: {},
      grid: {
        top: 10,
        bottom: 30,
      },
      xAxis:
        {
          type: "value",
          splitLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
      
      yAxis:
        {
          type: "category",
          data: ["2014", "2015", "2016", "2017", "2018"],
          axisLine: {
            lineStyle: {
              color: 'rgba(67, 87, 133, .2)'
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#8e9cad'
          },
        },
      
      series: [
        {
          type: "line",
          smooth: true,
          data: ["12", "25", "12", "35", "12", "20"],
          color:'#4454c3',
        },
        {
          type: "line",
          smooth: true,
          data: ["9", "11", "28", "10", "10", "15"],
          color:'#424e79',
        },
      ],
    },
  };
  //echart5
  export const echart5: EchartsState = {
    option: {
      xAxis: {
        type: "category",
        data: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
        ],
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#8e9cad'
        },
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#8e9cad'
        },
      },
      series: [
        {
          data: [15, 17, 19, 13, 28, 22, 36, 15, 25],
          type: "bar",
          stack: "total",
          color:'#4454c3',
        },
        {
          type: "bar",
          stack: "total",
          data: [25, 32, 35, 64, 52, 45, 35, 34, 54],
          color:'#767fbf',
        },
      ],
    },
  };
  //echart6
  export const echart6: EchartsState = {
    option: {
      grid: {
        left: "6%",
        right: "3%",
        bottom: "8%",
        top: "-1%",
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#8e9cad'
        },
      },
      yAxis: {
        type: "category",
        data: [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
        ],
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#8e9cad'
        },
      },
      series: [
        {
          type: "bar",
          stack: "total",
          data: [15, 17, 19, 13, 28, 22, 36, 15, 25],
          color:'#4454c3',
        },
        {
          type: "bar",
          stack: "total",
          data: [25, 32, 35, 64, 52, 45, 35, 34, 54],
          color:' #767fbf',
        },
      ],
    },
  };
  //echart7
  export const echart7: EchartsState = {
    option: {
      xAxis: {
        type: "category",
        data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#8e9cad'
        },
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
      },
      series: [
        {
          data: [20, 20, 36, 18, 14, 20, 25, 20],
          type: "line",
          color:'#4454c3',
  
        },
      ],
    },
  };
  //echart8
  export const echart8: EchartsState = {
    option: {
      xAxis: {
        type: "category",
        data: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
        axisLabel: {
          fontSize: 10,
          color: '#8e9cad'
        },
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            color: 'rgba(67, 87, 133, .2)'
          }
        },
      },
      series: [
        {
          data: [20, 20, 36, 18, 14, 20, 25, 20],
          type: "line",
          smooth: true,
          color:' #767fbf',
        },
      ],
    },
  };
  