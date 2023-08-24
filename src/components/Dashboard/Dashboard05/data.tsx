import React from "react";
import ReactApexChart from "react-apexcharts";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
import Bitcoin from "../../../assets/images/crypto-currencies/round-outline/Bitcoin.svg";
import Dash from "../../../assets/images/crypto-currencies/round-outline/Dash.svg";
import EOS from "../../../assets/images/crypto-currencies/round-outline/EOS.svg";
import Ethereum from "../../../assets/images/crypto-currencies/round-outline/Ethereum.svg";
import IOTA from "../../../assets/images/crypto-currencies/round-outline/IOTA.svg";
import Litecoin from "../../../assets/images/crypto-currencies/round-outline/Litecoin.svg";
import Ripple from "../../../assets/images/crypto-currencies/round-outline/Ripple.svg";
import bitcoin from "../../../assets/images/crypto-currencies/bitcoin.svg";
import Zcash from "../../../assets/images/crypto-currencies/round-outline/Zcash.svg";
import qtum from "../../../assets/images/crypto-currencies/qtum.svg";
import neo from "../../../assets/images/crypto-currencies/neo.svg";
import dash from "../../../assets/images/crypto-currencies/dash.svg";
import tron from "../../../assets/images/crypto-currencies/tron.svg";
import BitShares from "../../../assets/images/crypto-currencies/round-outline/BitShares.svg";
import NEM from "../../../assets/images/crypto-currencies/round-outline/NEM.svg";
import TajCoin from "../../../assets/images/crypto-currencies/round-outline/TajCoin.svg";
import { ApexOptions } from "apexcharts";

export const TradeHistory = [
  {
    pic: Bitcoin,
    name: "Bitcoin",
    price: "$0.11923",
    priceicon: <i className="fa fa-arrow-up text-green ms-1"></i>,
    amount: "0.0215",
  },
  {
    pic: Dash,
    name: "Dash",
    price: " $0.07324",
    priceicon: <i className="fa fa-arrow-down text-danger ms-1"></i>,
    amount: "0.0112",
  },
  {
    pic: EOS,
    name: "EOS",
    price: "$0.12645",
    priceicon: <i className="fa fa-arrow-up text-green ms-1"></i>,
    amount: "0.0214",
  },
  {
    pic: Ethereum,
    name: "Ethereum",
    price: " $0.01153",
    priceicon: <i className="fa fa-arrow-down text-danger ms-1"></i>,
    amount: "0.0012",
  },
  {
    pic: Ripple,
    name: "Ripple",
    price: "$0.08923",
    priceicon: <i className="fa fa-arrow-down text-danger ms-1"></i>,
    amount: "0.0015",
  },
  {
    pic: Litecoin,
    name: "Litecoin",
    price: "$0.14915",
    priceicon: <i className="fa fa-arrow-up text-green ms-1"></i>,
    amount: "0.0312",
  },
  {
    pic: IOTA,
    name: "IOTA",
    price: "$0.08923",
    priceicon: <i className="fa fa-arrow-down text-danger ms-1"></i>,
    amount: "0.0015",
  },
  {
    pic: Bitcoin,
    name: "Bitcoin",
    price: "$0.11923",
    priceicon: <i className="fa fa-arrow-up text-green ms-1"></i>,
    amount: "0.0215",
  },
  {
    pic: Dash,
    name: "Dash",
    price: "$0.07324",
    priceicon: <i className="fa fa-arrow-down text-danger ms-1"></i>,
    amount: "0.0112",
  },
  {
    pic: EOS,
    name: "EOS",
    price: "$0.12645",
    priceicon: <i className="fa fa-arrow-up text-green ms-1"></i>,
    amount: "0.0214",
  },
];
export const Balance = [
  {
    pic: bitcoin,
  },
  {
    pic: qtum,
  },
  {
    pic: neo,
  },
  {
    pic: dash,
  },
  {
    pic: tron,
  },
];

/* Chartjs (#bitcoin-chart) */
export const Bitcoinexhange = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
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
export const bitcoinexchange = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [83, 56, 89, 73, 61, 75, 86, 56],
      label: "Bitcoin Price",
      backgroundColor: "rgb(249, 162, 60,0.06)",
      borderColor: "rgba(249, 162, 60,0.8)",
      borderWidth: "2",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      fill: true,
      tension: 0.4,
    },
  ],
};
export const CryptoChart2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },

    title: {
      display: false,
      text: "Chart.js Line Chart",
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
export const CryptoChart = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [56, 78, 36, 78, 29, 78, 37, 56],
      label: "Ripple",
      backgroundColor: "rgb(70, 212, 151,0.06)",
      borderColor: "rgba(70, 212, 151,0.8)",
      fill: true,
      borderWidth: "3",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      lineTension: 0.3,
    },
  ],
};
export const Nem1 = {
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
export const Nem = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [45, 78, 67, 78, 36, 78, 89, 84],
      label: "Nem",
      backgroundColor: "rgb(104, 117, 207, 0.06",
      borderColor: "#6875cf",
      fill: true,
      borderWidth: "3",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      lineTension: 0.3,
    },
  ],
};
export const Neo3 = {
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
export const Neo = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  type: "line",
  datasets: [
    {
      data: [45, 78, 98, 34, 67, 28, 89, 45],
      label: "Neo",
      backgroundColor: "rgb(248, 70, 120,0.06)",
      borderColor: "rgba(248, 70, 120,0.8)",
      fill: true,
      borderWidth: "3",
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      lineTension: 0.3,
    },
  ],
};

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
      series: [
        {
          name: "Last Price $",
          data: [254, 678, 346, 789, 452, 389, 576, 689, 937, 457, 782, 827],
        },
        {
          name: "Daily Change $",
          data: [154, 578, 226, 589, 252, 189, 376, 289, 637, 257, 582, 727],
        },
      ],
      options: {
        chart: {
          height: 300,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        colors: ["var(--primary-bg-color)", "#f72d66"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        grid: {
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
        },

        tooltip: {
          enabled: true,
        },
      },
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="line"
        height={300}
      />
    );
  }
}
export const Cryptodata = [
  {
    price: "Last price",
    num: "$54875",
    icon: <i className="fe fe-arrow-down ms-1"></i>,
    inc: "0.9%",
    class: "text-danger me-1",
  },
  {
    price: "Daily change",
    num: "$136.5",
    icon: <i className="fe fe-arrow-up ms-1"></i>,
    inc: "0.15%",
    class: "text-success me-1",
  },
  {
    price: "Market cap",
    num: "$14,42,785",
    icon: <i className="fe fe-arrow-down ms-1"></i>,
    inc: "1.04%",
    class: "text-danger me-1",
  },
  {
    price: "24th volume",
    num: "65874.25",
    icon: <i className="fe fe-arrow-up ms-1"></i>,
    inc: "2.08%",
    class: "text-success me-1",
  },
];

export const Transactions = [
  {
    icons: <i className="fe fe-repeat"></i>,
    name: " Exchange USD to BTC",
    id: "ID : 4567893",
    value: "0.546854 BTC",
    day: "23",
    sup: "rd",
    month: "Jan 2020",
    color: "primary",
  },
  {
    icons: <i className="fe fe-repeat"></i>,
    name: " Exchange USD to Ripple",
    id: "ID : 6547345",
    value: "0.76543 Ri",
    day: "12",
    sup: "th",
    month: "Jan 2020",
    color: "primary",
  },
  {
    icons: <i className="fe fe-corner-right-up"></i>,
    name: " Buy Crypto",
    id: "ID : 8765478",
    value: "0.546854 BTC",
    day: "13",
    sup: "th",
    month: "feb 2020",
    color: "success",
  },
  {
    icons: <i className="fe fe-share"></i>,
    name: "Exchange BTC to USD",
    id: "ID : 8765434",
    value: "0.564567 USD",
    day: "15",
    sup: "th",
    month: "Jan 2020",
    color: "secondary",
  },
  {
    icons: <i className="fe fe-corner-right-up"></i>,
    name: "Buy Ripple",
    id: "ID : 2346784",
    value: " 0.76543 Ri",
    day: "23",
    sup: "rd",
    month: "Feb 2020",
    color: "success",
  },
  {
    icons: <i className="fe fe-repeat"></i>,
    name: " Exchange USD to BTC",
    id: "ID : 4567893",
    value: " 0.546854 BTC",
    day: "23",
    sup: "rd",
    month: "Jan 2020",
    color: "primary",
  },
  {
    icons: <i className="fe fe-repeat"></i>,
    name: " Exchange USD to Ripple",
    id: "ID : 6547345",
    value: " 0.76543 Ri",
    day: "12",
    sup: "th",
    month: "Jan 2020",
    color: "primary",
  },
];


export interface BTCdata {
  pic: string;
  name: string;
  price1: string;
  price: string;
  text: string; 
  value: string;
  data1: unknown;
  data2: unknown;
}

export const BTC: BTCdata[] = [
  {
    pic: Bitcoin,
    name: "BTC / USDT",
    price1: "$513",
    price: "$0.4",
    text: "Vol:",
    value: "(+2.33%)",
    data1: Bitcoinexhange,
    data2: bitcoinexchange,
  },
  {
    pic: Ethereum,
    name: "XEM / USDT",
    price1: "$966",
    price: "$0.12",
    text: "Vol:",
    value: "(-1.33%)",
    data1: Nem1,
    data2: Nem,
  },
  {
    pic: Ripple,
    name: "XRP / USDT",
    price1: "$7,349",
    price: "$0.14",
    text: "Vol:",
    value: "(+2.39%)",
    data1: CryptoChart2,
    data2: CryptoChart,
  },
  {
    pic: Litecoin,
    name: "Litecoin / USDT",
    price1: "$5,563",
    price: "$0.06",
    text: "Vol:",
    value: "(-1.25%)",
    data1: Neo3,
    data2: Neo,
  },
];
export const Tabledata = [
  {
    currency: Bitcoin,
    price: "Bitcoin",
    name: "BTC",
    price1: "$ 10513.00",
    market: "$ 51,191,183,730",
    volume: " $ 10,133,400,000",
    progressvalue: "90%",
    length: "90",
    color: "primary",
    bg: "primary",
  },
  {
    currency: Ethereum,
    price: "Ethereum",
    name: "ETC",
    price1: "$ 425.25",
    market: "$ 4,48,308,110",
    volume: "$ 193,430,000",
    progressvalue: "64%",
    length: "64",
    color: "success",
    bg: "success",
  },
  {
    currency: Ripple,
    price: "Ripple",
    name: "Ri",
    price1: "$ 1.2029",
    market: "$ 7,63,80,043",
    volume: "$ 42,677,430,000",
    progressvalue: "79%",
    length: "79",
    color: "warning",
    bg: "warning",
  },
  {
    currency: BitShares,
    price: "BitShares",
    name: "Bsc",
    price1: "$ 1547.67",
    market: "$ 6,14,18,730",
    volume: "$ 40,13,40,000",
    progressvalue: "32%",
    length: "32",
    color: "secondary",
    bg: "secondary",
  },
  {
    currency: NEM,
    price: "NEM",
    name: "NEM",
    price1: "$ 723.48",
    market: "$ 19,07,67,295",
    volume: "$ 17,99,90,000",
    progressvalue: "26%",
    length: "26",
    color: "success",
    bg: "success",
  },
  {
    currency: Litecoin,
    price: "Litecoin",
    name: "LTC",
    price1: "$ 149.18",
    market: "$ 8,44,49,000",
    volume: "$ 7,10,10,000",
    progressvalue: "98%",
    length: "98",
    color: "info",
    bg: "info",
  },
  {
    currency: Zcash,
    price: "Zcash",
    name: "Zcs",
    price1: "$ 149.18",
    market: "$ 8,44,49,000",
    volume: "$ 7,10,10,000",
    progressvalue: "36%",
    length: "36",
    color: "danger",
    bg: "danger",
  },
  {
    currency: IOTA,
    price: "Iota",
    name: "Ita",
    price1: "$ 149.18",
    market: "$ 8,44,49,000",
    volume: "$ 7,10,10,000",
    progressvalue: "46%",
    length: "46",
    color: "success",
    bg: "success",
  },
  {
    currency: Dash,
    price: "Dash",
    name: "Dsh",
    price1: "$ 149.18",
    market: "$ 8,44,49,000",
    volume: "$ 7,10,10,000",
    progressvalue: "50%",
    length: "50",
    color: "primary",
    bg: "primary",
  },
  {
    currency: TajCoin,
    price: "TajCoin",
    name: "Tcn",
    price1: "$ 149.18",
    market: "$ 8,44,49,000",
    volume: "$ 7,10,10,000",
    progressvalue: "66%",
    length: "66",
    color: "primary",
    bg: "primary",
  },
];


export const BuyUSD = [
  { value: '--Select--', label: '--Select--' },
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'INR', label: 'INR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'JPY', label: 'JPY' },
  { value: 'RUB', label: 'RUB' },
];
export const BuyBTC = [
  { value: '--Select--', label: '--Select--' },
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
  { value: 'DAH', label: 'DAH' },
  { value: 'RIP', label: 'RIP' },
  { value: 'ITA', label: 'ITA' },
  { value: 'EOS', label: 'EOS' },
];