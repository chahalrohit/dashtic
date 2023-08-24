import React from 'react';
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
Chart.register(...registerables, ArcElement, Tooltip, Legend);
import { Line, Bar, Doughnut, Pie, } from 'react-chartjs-2';

//Line Chart

export const LineOption: any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const LineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {

            scales: {
                y: {

                    grid: {
                        display: true,
                        color: 'rgba(227, 229,235,0.1)',
                        drawBorder: false
                    },
                },
                x: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(227, 229,235,0.1)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(227, 229,235,0.1)',
                        drawBorder: false
                    },
                }
            },
            
            data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25,60 ],
            borderColor: '#4454c3',
            borderWidth: 1,
            fill: false,
            tension: 0.5
        },
        {
            
            data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45],
            borderColor: '#424e79',
            borderWidth: 1,
            fill: false,
            tension: 0.5
        },
    ],
};
export function LineChart() {
    return <Line options={LineOption} data={LineData}  />;
};

//Area Chart

export const AreaOptions:any = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const AreaData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Data1',
            data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25 ],
            borderColor: '#424e79',
            fill: true,
            borderWidth: 1,
            tension: 0.5
        },
        {
            label: 'Data2',
            data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45, 60],
            borderColor: '#4454c3',
            fill: true,
            borderWidth: 1,
            tension: 0.5
        },
    ],
};

export function AreaChart() {
    return <Line options={AreaOptions} data={AreaData} />;
};

//Stacked BarChart

export const StackOption:any = {
    tooltips: {
        displayColors: true,
        callbacks: {
            mode: 'x',
        },
    },
    plugins: {
        legend: {
            display: false,
            position: 'right',
        }
    },
    scales: {
        x: {
            stacked: true,
            gridLines: {
                display: false,
            }
        },
        y: {
            stacked: true,
            ticks: {
                beginAtZero: true,
            },
            type: 'linear',
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom', display: false },
}

export const StackData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Data1',
        backgroundColor: "#4454c3",
        data: [14, 12, 34, 25, 24, 20],
        barPercentage: 0.5,
        borderWidth: 1,
    }, {
        label: 'Data2',
        backgroundColor: "#8d96da",
        data: [14, 12, 34, 25, 24, 20],
        barPercentage: 0.5,
        borderWidth: 1,
    }
],
}
export function StackedBarChart() {
    return <Bar options={StackOption} data={StackData} className="h-300" />;
};

//Horizontal Stacked BarChart

export const HoriOption:any = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 1,
        },
    },
    tooltips: {
        displayColors: true,
    },
    scales: {
        x: {
            stacked: true,
            gridLines: {
                display: false,
            }
        },
        y: {
            stacked: true,
            ticks: {
                beginAtZero: true,
            },
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: false,

        },
    },
}

export const HoriData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Data1',
        data: [14, 12, 34, 25, 24, 20],
		backgroundColor: '#8d96da',
        fill: true,
        borderWidth: 1,
    }, {
        label: 'Data2',
        data: [14, 12, 34, 25, 24, 20],
		backgroundColor:  '#4454c3',
        fill: true,
        borderWidth: 1,
    }],
}
export function HoriStackedBarChart() {
    return <Bar options={HoriOption} data={HoriData} className="h-300" />;
};

//Colored BarChart Start******

//Solid Color

export const BarOption1:any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const BarData1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        max: 80,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                },
                x: {
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                }
            },
            label: '# of Votes',
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: '#4454c3',
            borderWidth: 1,
            fill: false,
        }
    ],
};
export function Solid() {
    return <Bar options={BarOption1} data={BarData1}/>;
};


//Transparency

export const BarOption2:any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const BarData2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        max: 80,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                },
                x: {
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                }
            },
            label: '# of Votes',
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: 'rgba(0,123,255,.5)',
            borderWidth: 1,
            fill: false,
        }
    ],
};
export function Transparency() {
    return <Bar options={BarOption2} data={BarData2} />;
};


//GRADIENT

export const BarOption3:any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const BarData3 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        max: 80,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                },
                x: {
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                }
            },
            label: '# of Votes',
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: ['#4454c3', '#a5ace2', '#4056a7', '#9fa7e1','#4056a7', '#d2d6f1' ],
            borderWidth: 1,
            fill: false,
        }
    ],
};
export function Gradient() {

    return <Bar options={BarOption3} data={BarData3} />;
};

//Colored BarChart End******


//HORIZONTAL BAR CHART

export const Baroptions:any = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            display: false,
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const Bardata = {
    labels,
    datasets: [
        {
            label: '# of Votes',
            data: [14, 12, 34, 25, 24, 20],
            backgroundColor: [ "#4454c3",'#767fbf', '#a0a7d7', '#3040b5', '#5764bf', '#8e9bf3'],
        }
    ],
};

export function HoriBarChart() {
    return <Bar options={Baroptions} data={Bardata}  className="h-300" />;
}

//HORIZONTAL GROUPED BAR CHART


export const BarGroupedOptions:any = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    tooltips: {
        displayColors: true,
    },
    scales: {
        x: {
            stacked: false,
            gridLines: {
                display: false,
            }
        },
        y: {
            stacked: false,
            ticks: {
                beginAtZero: true,
            },
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: false,

        },
    },
}

export const BarGroupedData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: '# of Votes',
        data: [14, 12, 34, 25, 24, 20],
        backgroundColor:  [ "#4454c3",'#767fbf', '#a0a7d7', '#3040b5', '#5764bf', '#8e9bf3'],
    },
    {
        data: [22, 30, 25, 30, 20, 40,50],
        backgroundColor: '#4454c3'
    }
    ],
}
export function HoriGroupedChart() {
    return <Bar options={BarGroupedOptions} data={BarGroupedData} className="h-300" />;
};

//Doughnut CHART

export const DoughnutOptions:any = {

    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
    }
}
export const Doughnutdata = {

    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
        {
            label: '# of Votes',
            
            data: [35,24,20,15,8],
            backgroundColor: [ "#4454c3",'#767fbf', '#a0a7d7', '#3040b5', '#5764bf', '#8e9bf3'],
        },
    ],
};

export function DoughnutChart() {
    return <Doughnut id="chartDonut" data={Doughnutdata} options={DoughnutOptions} />;
}

//Pie Chart

export const PieOptions:any = {

    plugins: {
        
        legend: {
            display: false,
            position: 'right',
        },
    }
}


export const PieData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
        {
            label: '# of Votes',
            data: [20, 20, 30, 5, 25],
            backgroundColor: [ "#4454c3",'#767fbf', '#a0a7d7', '#3040b5', '#5764bf', '#8e9bf3'],
        },
    ],
};

export function PieChart() {
    return <Pie id="chartPie" data={PieData} options={PieOptions}/>;
}
