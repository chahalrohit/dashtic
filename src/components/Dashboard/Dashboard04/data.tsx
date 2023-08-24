import React from "react";
import ReactApexChart from "react-apexcharts";
import user1 from "../../../assets/images/users/1.jpg";
import user4 from "../../../assets/images/users/4.jpg";
import user3 from "../../../assets/images/users/3.jpg";
import user5 from "../../../assets/images/users/5.jpg";
import user6 from "../../../assets/images/users/6.jpg";
import user2 from "../../../assets/images/users/2.jpg";
import user7 from "../../../assets/images/users/7.jpg";
import user12 from "../../../assets/images/users/12.jpg";
import user10 from "../../../assets/images/users/10.jpg";

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

  series: [20],

  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#f72d66"],
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
export class ApexChart2 extends React.Component<{}, {options:any, series:any}> {
  constructor(props:any) {
    super(props);

    this.state = {
      series: [68, 55, 45,34,56],

      options: {
        colors: ["#2dce89", "var(--primary-bg-color)", "#f72d66","#45aaf2","#ecb403"],
        legend: {
          show: false,
        },
        chart: {
          type: "donut",
        },
        responsive: [
          {
            legend: {
              show: false,
            },
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
            },
          },
        ],
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
export const BestEmployees = [
  {
    img: user1,
    name: "John Wisely",
    work: "React Developer",
  },
  {
    img: user4,
    name: "Nicki Fanning",
    work: "PHP Developer",
  },
  {
    img: user5,
    name: "Lula Malone",
    work: "Ui Designer",
  },
  {
    img: user2,
    name: "Rina Summa",
    work: "Java Developer",
  },
  {
    img: user10,
    name: "Yadira Acklin",
    work: "Web Developer",
  },
  {
    img: user12,
    name: "Joanna Latta",
    work: "Angular Developer",
  },
];

export const ProjectStatus = [
  {
    title: "APPlications",
    num: "4,678",
    performance: "68%",
    class: "w-3 h-3 bg-primary me-2 mt-1 brround",
  },
  {
    title: "Shortlisted",
    num: "3,789",
    performance: "55%",
    class: "w-3 h-3 bg-secondary me-2 mt-1 brround",
  },
  {
    title: "Rejected",
    num: "2,137",
    performance: "45%",
    class: "w-3 h-3 bg-success me-2 mt-1 brround",
  },
  {
    title: "On Hold",
    num: "1,786",
    performance: "34%",
    class: "w-3 h-3 bg-info me-2 mt-1 brround",
  },
  {
    title: "Finalised",
    num: "897",
    performance: "27%",
    class: "w-3 h-3 bg-warning me-2 mt-1 brround",
  },
];

export const ApplicationStatus = [
  {
    Code: "2548",
    Date: "3rd Feb 2019",
    Employee: "Emp-2312",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Sick",
    Status: "Approved",
    class: "badge bg-success rounded-pill",
  },
  {
    Code: "4536",
    Date: "23rd Mar 2019",
    Employee: "Emp-6754",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Hospital",
    class: "badge bg-success rounded-pill",
    Status: "Approved",
  },
  {
    Code: "2567",
    Date: "4th Feb 2019",
    Employee: "Emp-1432",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Outside",
    class: "badge bg-primary rounded-pill",
    Status: "Pending",
  },
  {
    Code: "7654",
    Date: "13th Mar 2019",
    Employee: "Emp-1254",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Normal",
    Status: "Rejected",
    class: "badge bg-danger rounded-pill",
  },
  {
    Code: "8754",
    Date: "28th Feb 2019",
    Employee: "Emp-8765",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Sick",
    Status: "Approved",
    class: "badge bg-success rounded-pill",
  },
  {
    Code: "1232",
    Date: "23rd Apr 2019",
    Employee: "Emp-7643",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Other Work",
    Status: "Rejected",
    class: "badge bg-danger rounded-pill",
  },
  {
    Code: "8765",
    Date: "16th Feb 2019",
    Employee: "Emp-2431",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Sick",
    Status: "Pending",
    class: "badge bg-primary rounded-pill",
  },
  {
    Code: "7654",
    Date: "23rd Mar 2019",
    Employee: "Emp-5643",
    Leave: "PL",
    Period: "1 Day",
    Reason: "Outside",
    Status: "Rejected",
    class: "badge bg-danger rounded-pill",
  },
];
export const EmployeeDetails = [
  {
    pic: user1,
    name: "Lillian Blake",
    email: "lillianblake@gmail.com",
    work: "React Developer",
    projecrt: "876",
    performance: "45%",
  },
  {
    pic: user2,
    name: "Georgine Earle",
    email: "georgineearle@gmail.com",
    work: "Php Developer",
    projecrt: "342",
    performance: "55%",
  },
  {
    pic: user3,
    name: "Veta Willson",
    email: "vetawillson@gmail.com",
    work: "Web Developer",
    projecrt: "564",
    performance: "85%",
  },
  {
    pic: user4,
    name: "Kayleigh Throneberry",
    email: "kayleighthroneberry@gmail.com",
    work: "Web Developer",
    projecrt: "345",
    performance: "90%",
  },
  {
    pic: user5,
    name: "Gretta Perro",
    email: "grettaperro@gmail.com",
    work: "Angular Developer",
    projecrt: "123",
    performance: "65%",
  },
  {
    pic: user6,
    name: "Emelina Poisson",
    email: "emelinapoisson@gmail.com",
    work: "Web Developer",
    projecrt: "456",
    performance: "40%",
  },
  {
    pic: user7,
    name: "Marleen Sohn",
    email: "marleensohn@gmail.com",
    work: "Web Developer",
    projecrt: "876",
    performance: "65%",
  },
  
];
export class ProjectTracked extends React.Component<{}, {options:any, series:any}> {
  constructor(props:any) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Project In',
        data: [1453, 3425, 7654, 3245, 4532, 5643, 7635, 5465, 6754, 5432, 5435, 6545]
      }, {
        name: 'Project take',
        data: [1123, 2435, 5463, 1245, 3245, 4534, 5435, 3452, 5432, 3452, 2564, 3456 ]
      }, {
        name: 'On Hold',
        data: [330, 990, 2191, 2000, 1287, 1109, 2013, 1322, 1980, 2971, 3089, 1234]
      }, ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        dataLabels: {
          enabled: false,},
        plotOptions: {
          bar: {
            borderRadius: 10,
            horizontal: false,
            columnWidth: '28%'
            
          },
        },
        colors: ["var(--primary-bg-color)","#f72d66","#cedbfd"],
        
        xaxis: {
          categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         
        },
        
        tooltip: {
          show: true,
			
        },
        fill: {
          opacity: 1
        },
        legend: {
         show:false
        }
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>


    );
  }
}
export class ApexCharts extends React.Component<{}, {options7:any, series7:any}> {
  constructor(props:any) {
    super(props);

    this.state = {
    
    
      series7: [45],
      options7: {
        chart: {
          type: 'radialBar',
          width: 50,
          height: 50,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: '50%'
            },
            track: {
              margin: 0
            },
            dataLabels: {
              show: false
            }
          }
        }
      },
    
      
    
    };
  }



  render() {
    return (
      <>



<ReactApexChart options={this.state.options7} series={this.state.series7} className="mx-auto chart-circle chart-circle-xs chart-circle-secondary mt-sm-0 mb-0 icon-dropshadow-secondary" type="radialBar" height={50} width={50} />




</>

    );
  }
}
export const ApexCharta = {
  series: [85],


  options: {
    colors: ["var(--primary-bg-color)"],
    chart: {
      type: 'radialBar',
      width: 50,
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '60%'
        },
        track: {
          margin: 0,
        },
        dataLabels: {
          show: false
        }
      }
    }
  }
};

export const Radialbartable:any = {

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
          background: '#c4caee',
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
      options={Radialbartable.options}
      series={Radialbartable.series}
      className=""
      type="radialBar"
      height={55}
      width={60}
    />
  );
};