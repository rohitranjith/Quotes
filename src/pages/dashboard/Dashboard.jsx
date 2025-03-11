import { useState } from 'react'
import { Box, Typography, useTheme, Stack, alpha, Paper, Grid } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const theme = useTheme();
    const { isDarkMode } = useSelector(state => state.ui)
    const colors = [
        "#ffae1f",
        "#00b8d9",
        "#8e33ff",
        "#13deb9",
        "#845adf",
        "#439c9c",
        "#6d4c41",
        "#424242",
        "#c0ca33"
    ]

    const ClientListIcon = ({ client, styles }) => {
        if (client === 'Total Quotes') {
            return <InventoryOutlinedIcon sx={styles} />
        }
        else if (client === 'Weekly Quotes') {
            return <DateRangeOutlinedIcon sx={styles} />
        }
        else if (client === 'Total Days') {
            return <EditCalendarOutlinedIcon sx={styles} />
        }
        else if (client === 'Payments') {
            return <CreditCardOutlinedIcon sx={styles} />
        }
    }

    const [barseries, setBarseries] = useState([{
        name: 'Net Profit',
        data: [30, 55, 25, 70, 45, 65, 38, 80, 35]
    }
    ])

    const [weekRevenue, setWeekRevenue] = useState([{
        name: 'Morning',
        data: [50, 60, 40, 60, 65, 75, 70]
    }, {
        name: 'Evening',
        data: [76, 50, 80, 85, 40, 105, 85]
    }, {
        name: 'Night',
        data: [40, 70, 45, 99, 35, 90, 105]
    }
    ])

    const [series, setSeries] = useState([{
        name: 'Revenue',
        data: [
            [1327446000000, 0],
            [1327532400000, 25],
            [1327618800000, 60],
            [1327705200000, 50],
            [1327791600000, 35],
            [1327878000000, 58],
            [1327964400000, 30],
            [1328050800000, 40],
            [1328137200000, 40],
            [1328223600000, 50],
            [1328310000000, 58],
            [1328396400000, 40],
            [1328482800000, 45],
            [1328569200000, 60],
            [1328655600000, 20],
        ]

    }])

    const MonthlyChartOpt = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
            foreColor: theme.palette.text.title
        },
        title: {
            text: 'Monthly sales',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'inherit',
                color: theme.palette.text.title
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#0a7ea4'],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                },
            },

        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    color: theme.palette.text.title
                }
            },
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
                fontFamily: 'inherit',
                fontWeight: 500,
                boxShadow: 'none'
            },
            theme: isDarkMode ? 'dark' : 'light',
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
        legend: {
            fontFamily: 'inherit',
            offsetY: 2,
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                radius: 12,
                offsetX: 0,
                offsetY: 0
            },
            style: {
                fontFamily: 'inherit',
                fontWeight: 600
            }
        },
    }

    const WeeklyChartOpt = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
            foreColor: theme.palette.text.title
        },
        title: {
            text: 'Weekly Quotes',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'inherit',
                color: theme.palette.text.title
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#dc4e8a', '#28d2da', '#dea789'],
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                }
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500
                }
            },
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
                fontFamily: 'inherit',
                fontWeight: 500
            },
            theme: isDarkMode ? 'dark' : 'light',
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        },
        legend: {
            fontFamily: 'inherit',
            offsetY: 2,
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                radius: 12,
                offsetX: 0,
                offsetY: 0,
                fontWeight: 600
            },
            style: {
                fontFamily: 'inherit'
            }
        },
    }

    const saleRevenueOpt = {
        title: {
            text: 'Sales & Revenue',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: 'inherit',
                color: theme.palette.text.title
            },
        },
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
            foreColor: theme.palette.text.title

        },
        stroke: {
            // curve: 'straight',
            width: 1,
            // lineCap: 'square',
            // dashArray: 5,
        },
        colors: ['#0a7ea4'],
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'date',
            labels: {
                show: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    fontSize: 10,
                },
                formatter: function (val) {
                    return moment(val).format('DD/MM/YYYY');
                },
            },
            tooltip: {
                enabled: true,
                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                    color: '#222'
                },
            },
        }, yaxis: {
            labels: {
                show: true,

                style: {
                    fontFamily: 'inherit',
                    fontWeight: 500,
                },
                formatter: function (val) {
                    if (val >= 100000000) {
                        val = (val / 100000000) + "B"
                    }
                    else if (val >= 1000000) {
                        val = (val / 1000000) + "M"
                    }
                    else if (val >= 1000) {
                        val = (val / 1000) + "K";
                    }
                    return val;
                },
            },
            axisBorder: {
                show: false
            },
        },
        legend: {
            fontFamily: 'inherit',
            offsetY: 10,
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                radius: 12,
                offsetX: 0,
                offsetY: 0
            },
            style: {
                fontFamily: 'inherit',
                fontWeight: 600
            }
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: '12px',
                fontFamily: 'inherit',
                fontWeight: 500,
            },
            theme: isDarkMode ? 'dark' : 'light',
            onDatasetHover: {
                highlightDataSeries: true,
            },
            x: {
                show: true,
            },
            marker: {
                show: true,
            },
            items: {
                display: 'flex',
            },
        },
    }

    return (
        <>
            <Box>
                <Box sx={{ pb: { xs: 1.5, sm: 2 } }}>
                    <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                        {
                            ['Total Quotes', 'Weekly Quotes', 'Total Days', 'Payments'].map((client, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Box>
                                        <Paper sx={{ backgroundColor: "background.default", borderRadius: 2.8, p: { xs: 2, md: 3 }, cursor: 'pointer', }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <Box>
                                                    <Typography sx={{ fontSize: { xs: 22, sm: 28, md: 30 }, color: 'text.title', fontWeight: 700, lineHeight: "normal", }}>{50 + index + 1}</Typography>
                                                    <Typography sx={{ mb: 2, textTransform: "capitalize", color: 'text.title' }}>{client}</Typography>
                                                    <Stack direction='row' alignItems='center' flexWrap={'wrap'}><ImportExportIcon sx={{ fontSize: '16px', py: 0, color: 'success.main' }} /><Typography sx={{ mr: '5px', color: 'success.main', fontSize: 12 }}>+1{index}%</Typography><Typography sx={{ fontSize: 12, color: 'text.muted' }}>since last month</Typography></Stack>
                                                </Box>
                                                <Stack sx={{ height: 50, width: 50, borderRadius: 2, bgcolor: alpha(colors[index], 0.1), boxSizing: "border-box", alignItems: "center", justifyContent: "center" }}>
                                                    <ClientListIcon styles={{ fontSize: 30, color: colors[index] }} client={client} />
                                                </Stack>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                        <Grid item xs={12} >
                            <Box component={Paper} sx={{ backgroundColor: 'background.default', borderRadius: 2, p: 1 }}>
                                <ReactApexChart options={saleRevenueOpt} series={series} type="area" height={308} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box component={Paper} sx={{ backgroundColor: 'background.default', borderRadius: 2, p: 1 }}>
                                <ReactApexChart options={WeeklyChartOpt} series={weekRevenue} type="bar" height={308} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box component={Paper} sx={{ backgroundColor: 'background.default', borderRadius: 2, p: 1 }}>
                                <ReactApexChart options={MonthlyChartOpt} series={barseries} type="bar" height={308} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Dashboard