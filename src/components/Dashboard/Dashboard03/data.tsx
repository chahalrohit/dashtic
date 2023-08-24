import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface spark3 {
  options?: ApexOptions,
  width?: string | number,
  height?: string | number,
  series?: ApexOptions['series'],
  [key: string]: any
  label?: XAxisAnnotations
  endingShape?: string
}


export class ProjectInvestment extends React.Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);

      this.state = {
      
        series: [{
            name: "Project Budget",
            data: [7635, 5465, 6754, 5432, 5435, 6545, 4453, 3425, 7654, 3245, 4532, 5643],
        },
        {
            name: 'Expenses',
		data: [ 5435, 3452, 5432, 3452, 2564, 3456, 3123, 2435, 5463, 1245, 3245, 4534,],
        }
    ],
        options: {
            legend: {
                position: 'top'},
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          colors:[ "var(--primary-bg-color)",'#f72d66'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
          },
          grid: {
           
          },
          xaxis: {
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          
          tooltip: {
			enabled: true,
		},
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={340} />
</div>


      );
    }
  }

  export class ApexChart3 extends React.Component<{}, spark3> {
    constructor(props: {} | Readonly<{}>) {
      super(props);
      var sparklineData2 = [13, 26, 20, 33, 21, 40, 35, 65];
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
          colors: ["#4454c3"],
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
          height={185}
          width="100%"
        />
      );
    }
  }
  export const CompleteInvoices = [
    {
        Client:"Hoyt Righter",
        Date:"Jan 13, 2020",
        Invoice:"INV-1432",
        Amount:"$34,980",  
        class:"badge bg-success rounded-pill",
        Status:"Paid",
    },
    {
        Client:"Melvina Harn",
        Date:"Feb 12, 2020",
        Invoice:"INV-5467",
        Amount:"$35,768",  
        class:"badge bg-success rounded-pill",
        Status:"Paid",
    },
    {
        Client:"Riva Digangi",
        Date:"Mar 23, 2020",
        Invoice:"INV-6543",
        Amount:"$13,456",  
        class:"badge bg-success rounded-pill",
        Status:"Paid",
    },
    {
        Client:"Craig Dollard",
        Date:"Apr 11, 2020",
        Invoice:"INV-3245",
        Amount:"$25,678",  
        class:"badge bg-danger rounded-pill",
        Status:"Due",
    },
  ]