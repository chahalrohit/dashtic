import React from "react";
import ReactApexChart from "react-apexcharts";
import orders from "../../../assets/images/orders/1.jpg";
import orders2 from "../../../assets/images/orders/2.jpg";
import orders3 from "../../../assets/images/orders/3.jpg";
import orders5 from "../../../assets/images/orders/5.jpg";
import orders4 from "../../../assets/images/orders/4.jpg";
import orders1 from "../../../assets/images/orders/1.jpg";
import orders7 from "../../../assets/images/orders/7.jpg";
import orders8 from "../../../assets/images/orders/8.jpg";
import orders10 from "../../../assets/images/orders/10.jpg";
import orders11 from "../../../assets/images/orders/11.jpg";
import orders14 from "../../../assets/images/orders/14.jpg";
import orders12 from "../../../assets/images/orders/12.jpg";
import orders9 from "../../../assets/images/orders/9.jpg";
import users12 from "../../../assets/images/users/12.jpg";
import users5 from "../../../assets/images/users/5.jpg";
import users10 from "../../../assets/images/users/10.jpg";
import users2 from "../../../assets/images/users/2.jpg";
import users4 from "../../../assets/images/users/4.jpg";
import users1 from "../../../assets/images/users/1.jpg";
import { ApexOptions } from "apexcharts";



interface spark3 {
  options?: ApexOptions,
  width?: string | number,
  height?: string | number,
  series?: ApexOptions['series'],
  [key: string]: any
  label?: XAxisAnnotations
  endingShape?: string
}



export class ApexChart1 extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: [253, 256, 395, 204, 251, 458, 364, 145, 156, 250, 253, 278],
        },
      ],
      options: {
        colors: ["#4454c3"],
        chart: {
          height: 400,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 3,
          dashArray: 0,
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          },
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
          title: {
            text: "Month",
            style: {
              color: '#8e9cad',
              fontSize: '15px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        yaxis: {
          title: {
            text: "Revenue",
            style: {
              color: '#8e9cad',
              fontSize: '15px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-yaxis-label',
            },
          }
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
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={400}
        />
      </div>
    );
  }
}

export class ApexChart3 extends React.Component<{}, spark3> {
  constructor(props:{} | Readonly<{}>) {
    super(props);
    var sparklineData2 = [
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
        fill: {
          gradient: {
            enabled: false,
          },
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


export interface columnData {
  Header: string
  accessor: string
  className: string
}

export const COLUMNS: columnData[] | any = [
  {
    Header: "Seller",
    accessor: "Seller",
    className: "border-bottom-0 sorting",
  },
  {
    Header: "Total Sales",
    accessor: "TotalSales",
    className: "border-bottom-0 sorting",
  },
  {
    Header: "Active Stocks",
    accessor: "ActiveStocks",
    className: "border-bottom-0 sorting",
  },
  {
    Header: "Category",
    accessor: "Category",
    className: "border-bottom-0 sorting",
  },
  {
    Header: "Revenue",
    accessor: "Revenue",
    className: "border-bottom-0 sorting",
  },
  {
    Header: "Status",
    accessor: "Status",
    className: "border-bottom-0 sorting sorting_desc",
  },
];

export interface datatable {
  Seller: JSX.Element
  TotalSales: string
  ActiveStocks: string
  Category: string
  Status: JSX.Element
  Revenue: JSX.Element
}

export const DATATABLE: datatable[] = [
  {
    Seller: <span className="font-weight-bold">GOODS Best</span>,
    TotalSales: "425.25",
    ActiveStocks: "1.2029",
    Category: "Cake",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$42,282</span>,
  },
  {
    Seller: <span className="font-weight-bold">Indo Allinone</span>,
    TotalSales: "81,865",
    ActiveStocks: "149.18",
    Category: "Fashion",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$86,334</span>,
  },
  {
    Seller: <span className="font-weight-bold">Granite Cake</span>,
    TotalSales: "1,250,103",
    ActiveStocks: "425.25",
    Category: "Medical",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$21,762</span>,
  },
  {
    Seller: <span className="font-weight-bold">Sagar Limited</span>,
    TotalSales: "24,983",
    ActiveStocks: "723.48",
    Category: "Mobile",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$24,983</span>,
  },
  {
    Seller: <span className="font-weight-bold">Spark Limited</span>,
    TotalSales: "32,309",
    ActiveStocks: "149.18",
    Category: "Gift",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$25,000</span>,
  },
  {
    Seller: <span className="font-weight-bold">Suprtmarket Online</span>,
    TotalSales: "2,142",
    ActiveStocks: "149.18",
    Category: "Elactrical",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$5,196</span>,
  },
  {
    Seller: <span className="font-weight-bold">Multi Shop</span>,
    TotalSales: "28,470",
    ActiveStocks: "1547.67",
    Category: "1547.67",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$86,334</span>,
  },
  {
    Seller: <span className="font-weight-bold">Altanta Products</span>,
    TotalSales: "149.18",
    ActiveStocks: "10,120",
    Category: "Cloths",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$2,167.83</span>,
  },
  {
    Seller: <span className="font-weight-bold">SREE Enrprices</span>,
    TotalSales: "20,125",
    ActiveStocks: "10513.00",
    Category: "Watch",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$13,206</span>,
  },
  {
    Seller: <span className="font-weight-bold">Stranger Seller</span>,
    TotalSales: "149.18",
    ActiveStocks: "25,000",
    Category: "Manufecture",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$58.39</span>,
  },
  {
    Seller: <span className="font-weight-bold">GOODS Best</span>,
    TotalSales: "425.25",
    ActiveStocks: "1.2029",
    Category: "Cake",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$42,282</span>,
  },
  {
    Seller: <span className="font-weight-bold">Indo Allinone</span>,
    TotalSales: "81,865",
    ActiveStocks: "149.18",
    Category: "Fashion",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$86,334</span>,
  },
  {
    Seller: <span className="font-weight-bold">Granite Cake</span>,
    TotalSales: "1,250,103",
    ActiveStocks: "425.25",
    Category: "Medical",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$21,762</span>,
  },
  {
    Seller: <span className="font-weight-bold">Sagar Limited</span>,
    TotalSales: "24,983",
    ActiveStocks: "723.48",
    Category: "Mobile",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-down text-success me-1"></i>.05%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$24,983</span>,
  },
  {
    Seller: <span className="font-weight-bold">Spark Limited</span>,
    TotalSales: "32,309",
    ActiveStocks: "149.18",
    Category: "Gift",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$25,000</span>,
  },
  {
    Seller: <span className="font-weight-bold">Suprtmarket Online</span>,
    TotalSales: "2,142",
    ActiveStocks: "149.18",
    Category: "Elactrical",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$5,196</span>,
  },
  {
    Seller: <span className="font-weight-bold">Multi Shop</span>,
    TotalSales: "28,470",
    ActiveStocks: "1547.67",
    Category: "1547.67",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$86,334</span>,
  },
  {
    Seller: <span className="font-weight-bold">Altanta Products</span>,
    TotalSales: "149.18",
    ActiveStocks: "10,120",
    Category: "Cloths",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$2,167.83</span>,
  },
  {
    Seller: <span className="font-weight-bold">SREE Enrprices</span>,
    TotalSales: "20,125",
    ActiveStocks: "10513.00",
    Category: "Watch",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$13,206</span>,
  },
  {
    Seller: <span className="font-weight-bold">Stranger Seller</span>,
    TotalSales: "149.18",
    ActiveStocks: "25,000",
    Category: "Manufecture",
    Status: (
      <span className="sorting_1">
        <i className="fa fa-caret-up text-danger me-1"></i>.01%
      </span>
    ),
    Revenue: <span className="font-weight-bold">$58.39</span>,
  },
];


interface Props {
  filter: string | null;
  setFilter: (value: string) => void;
}

export const GlobalFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};


export const usercountry = [
  {
    icon: "flag flag-us",
    country: "USA",
    price: " $519.75",
    className: "w-1 text-center ps-5",
  },
  {
    icon: "flag flag-cn",
    country: "China",
    price: "$248.07",
    className: "ps-5",
  },
  {
    icon: "flag flag-de ",
    country: "Germany",
    price: " $190.57",
    className: "ps-5",
  },
  {
    icon: "flag flag-ru",
    country: "Russia",
    price: " $173.25",
    className: "ps-5",
  },
  {
    icon: "flag flag-in",
    country: "India",
    price: "$63.00",
    className: "ps-5",
  },
  {
    icon: "flag flag-cn",
    country: "China",
    price: "$13.00",
    className: "ps-5",
  },
  {
    icon: "flag flag-pk",
    country: "Pakisthan",
    price: "$43.19",
    className: "ps-5",
  },
  {
    icon: "flag flag-ca",
    country: "Canada",
    price: "$56.19",
    className: "ps-5",
  },
  {
    icon: "flag flag-ge",
    country: "Germany",
    price: "$49.00",
    className: "ps-5",
  },
  {
    icon: "flag flag-us",
    country: "USA",
    price: "$519.75",
    className: "ps-5",
  },
  {
    icon: "flag flag-cn",
    country: "China",
    price: "$248.07",
    className: "ps-5",
  },
];
export const userdata = [
  {
    photo: orders7,
    title: "New Book",
    num: "#12323423",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: "Completed",
  },
  {
    photo: orders8,
    title: "New Bowl",
    num: "#26762768",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-warning rounded-pill",
    badge: " Pending",
  },
  {
    photo: orders9,
    title: "Modal Car",
    num: "#76273277",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: " Pending",
  },
  {
    photo: orders10,
    title: "Headset",
    num: "#67237267",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-danger rounded-pill",
    badge: "Declined",
  },
  {
    photo: orders11,
    title: "New Headset",
    num: "#561527167",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-danger rounded-pill",
    badge: "Declined",
  },
  {
    photo: orders12,
    title: "Watch",
    num: "#12323423",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: "Completed",
  },
  {
    photo: orders14,
    title: "New Modal shoe",
    num: "#12323423",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-primary rounded-pill",
    badge: "Completed",
  },
  {
    photo: orders5,
    title: "Branded Shoes",
    num: "#26762768",
    date: "11th July, 10am",
    price: "$13,206",
    classname: "badge bg-warning rounded-pill",
    badge: " Pending",
  },
];
export const RecentCustomers=[
  {
    img:users1,
    name:"John Wisely",
    text: "1340 Gills Rd, VA, 23139",
  },
  {
    img:users4,
    name:"Nicki Fanning",
    text: "408 1st St, NC, 28468",
  },
  {
    img:users5,
    name:"Lula Malone",
    text: "104 Jefferson Ln, TN, 37643",
  },
  {
    img:users2,
    name:"Rina Summa",
    text: "49 Scott Dr, NY, 10941",
  },
  {
    img:users10,
    name:"Yadira Acklin",
    text: "507 E 22nd St S, IA, 50208",
  },
  {
    img:users12,
    name:"Joanna Latta",
    text: "511 N Walnut St, LA, 71082",
  },
]
export const Topproduct = [
  {
    pic:orders,
    toptext:"Latest Books",
    time:"2,30,400 times"
  },
  {
    pic:orders2,
    toptext:"New Branded Shoes",
    time:"3,45,675 times"
  },
  {
    pic:orders3,
    toptext:"Beauty Makeup kit",
    time:"5,23,324 times"
  },
  {
    pic:orders4,
    toptext:"Headset",
    time:"1,42,400 times"
  },
  {
    pic:orders5,
    toptext:" New Modal Shoes",
    time:"3,30,400 times"
  },
  {
    pic:orders1,
    toptext:"Latest Books",
    time:"2,30,400 times"
  },
  {
    pic:orders2,
    toptext:" New Branded Shoes",
    time:"3,45,675 times"
  },
]