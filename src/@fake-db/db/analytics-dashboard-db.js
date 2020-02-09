import mock from './../mock';

const analyticsDashboardAppDB = {
    widgets: {
        widget1: {
            chartType: 'line',
            datasets: {
                '2017': [
                    {
                        label: 'Tn/ha',
                        data: [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
                        fill: 'start'
                    }
                ],
                '2018': [
                    {
                        label: 'Tn/ha',
                        data: [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
                        fill: 'start'
                    }
                ],
                '2019': [
                    {
                        label: 'Tn/ha',
                        data: [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
                        fill: 'start'
                    }
                ]
            },
            labels: ['POD', 'JUN', 'JUL', 'AUG', 'SET'],
            options: {
                spanGaps: false,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 32,
                        left: 32,
                        right: 32
                    }
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 2,
                        hoverRadius: 4,
                        hoverBorderWidth: 2
                    },
                    line: {
                        tension: 0
                    }
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                tickMarkLength: 18
                            },
                            ticks: {
                                fontColor: '#ffffff'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks: {
                                min: 1.5,
                                max: 5,
                                stepSize: 0.5
                            }
                        }
                    ]
                },
                plugins: {
                    filler: {
                        propagate: false
                    },
                    xLabelsOnTop: {
                        active: true
                    }
                }
            }
        },
        widget2: {
            conversion: {
                value: 18.7,
                ofTarget: 13
            },
            chartType: 'bar',
            datasets: [
                {
                    label: 'Brixº',
                    data: [8, 12.5, 14.6, 16.7, 18, 20.5, 19]
                }
            ],
            labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom'],
            options: {
                spanGaps: false,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 24,
                        left: 16,
                        right: 16,
                        bottom: 16
                    }
                },
                scales: {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks: {
                                min: 1,
                                max: 30
                            }
                        }
                    ]
                }
            }
        },
        widget3: {
            impressions: {
                value: '2.9',
                ofTarget: 12
            },
            chartType: 'line',
            datasets: [
                {
                    label: 'ph',
                    data: [2.6, 2.8, 2.85, 2.86, 3.0, 3.1, 3.2, 3.2, 3.4, 3.6, 3.4, 3.2, 3.3, 3.1, 3.0],
                    fill: false
                }
            ],
            labels: ['SET1', 'SET2', 'SET3', 'SET4', 'SET5', 'SET6', 'SET7', 'SET8', 'SET9', 'SET10', 'SET11', 'SET12', 'SET13', 'SET14', 'SET15'],
            options: {
                spanGaps: false,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 2,
                        borderWidth: 1,
                        hoverRadius: 2,
                        hoverBorderWidth: 1
                    },
                    line: {
                        tension: 0
                    }
                },
                layout: {
                    padding: {
                        top: 24,
                        left: 16,
                        right: 16,
                        bottom: 16
                    }
                },
                scales: {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks: {
                                // min: 100,
                                // max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget4: {
            visits: {
                value: 5.7,
                ofTarget: -9
            },
            chartType: 'bar',
            datasets: [
                {
                    label: 'g/l tart',
                    data: [35.7, 31.7, 13.8, 10.8, 7.8, 4.9, 6]
                }
            ],
            labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom'],
            options: {
                spanGaps: false,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 24,
                        left: 16,
                        right: 16,
                        bottom: 16
                    }
                },
                scales: {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks: {
                                min: 1,
                                max: 40
                            }
                        }
                    ]
                }
            }
        },
        widget5: {
            chartType: 'line',
            datasets: {
                'ayer': [
                    {
                        label: 'Low Estim',
                        data: [1900, 2300, 3400, 1700, 3100, 2750, 2500, 1100, 2800, 3100, 4000, 3600],
                        fill: 'start'
                    },
                    {
                        label: 'Alta Estim',
                        data: [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
                        fill: 'start'
                    }
                ],
                'hoy': [
                    {
                        label: 'Low Estim',
                        data: [2580, 3000, 3900, 2900, 4000, 3600, 2500, 2200, 3200, 3400, 4000, 3700],
                        fill: 'start'
                    },
                    {
                        label: 'Alta Estim',
                        data: [3000, 3400, 4100, 3300, 4200, 3700, 2900, 2900, 3900, 4000, 4400, 3950],
                        fill: 'start'
                    }
                ]
            },
            labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12'],
            options: {
                spanGaps: false,
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                tooltips: {
                    position: 'nearest',
                    mode: 'index',
                    intersect: false
                },
                layout: {
                    padding: {
                        left: 24,
                        right: 32
                    }
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 2,
                        hoverRadius: 4,
                        hoverBorderWidth: 2
                    }
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                fontColor: 'rgba(0,0,0,0.54)'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                tickMarkLength: 16
                            },
                            ticks: {
                                stepSize: 500
                            }
                        }
                    ]
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                }
            }
        },
        widget6: {
            markers: [
                {
                    lat: 52,
                    lng: -73,
                    label: '120'
                },
                {
                    lat: 37,
                    lng: -104,
                    label: '498'
                },
                {
                    lat: 21,
                    lng: -7,
                    label: '443'
                },
                {
                    lat: 55,
                    lng: 75,
                    label: '332'
                },
                {
                    lat: 51,
                    lng: 7,
                    label: '50'
                },
                {
                    lat: 31,
                    lng: 12,
                    label: '221'
                },
                {
                    lat: 45,
                    lng: 44,
                    label: '455'
                },
                {
                    lat: -26,
                    lng: 134,
                    label: '231'
                },
                {
                    lat: -9,
                    lng: -60,
                    label: '67'
                },
                {
                    lat: 33,
                    lng: 104,
                    label: '665'
                }
            ],
            styles: [
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.text.fill',
                    'stylers': [
                        {
                            'color': '#444444'
                        }
                    ]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'color': '#f2f2f2'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'saturation': -100
                        },
                        {
                            'lightness': 45
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'visibility': 'simplified'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.icon',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': [
                        {
                            'color': '#039be5'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                }
            ]
        },
        widget7: {
            labels: [
                'Ótimo',
                'Alto',
                'Low'
            ],
            datasets: {
                'Today': [
                    {
                        data: [92.8, 6.1, 1.1],
                        change: [-0.6, 0.7, 0.1]
                    }
                ],
                'Yesterday': [
                    {
                        data: [77.2, 8.4, 14.4],
                        change: [-2.3, 0.3, -0.2]
                    }
                ],
                'Last 7 days': [
                    {
                        data: [88.2, 9.2, 2.6],
                        change: [1.9, -0.4, 0.3]
                    }
                ],
                'Last 14 days': [
                    {
                        data: [65.2, 2.6, 32.2],
                        change: [-12.6, -0.7, 4.2]
                    }
                ],
                'Last 20 days': [
                    {
                        data: [93.5, 4.2, 2.3],
                        change: [2.6, -0.7, 2.1]
                    }
                ]
            },
            options: {
                cutoutPercentage: 75,
                spanGaps: false,
                legend: {
                    display: false
                },
                maintainAspectRatio: false
            }
        },
        widget8: {
            datasets: [
                [
                    {
                        label: '1Dia',
                        data: [72, 65, 70, 78, 85, 82, 88],
                        fill: false,
                        borderColor: '#5c84f1'
                    }
                ],
                [
                    {
                        label: '1Semana',
                        data: [540, 539, 527, 548, 540, 552, 566],
                        fill: false,
                        borderColor: '#5c84f1'
                    }
                ],
                [
                    {
                        label: '1Mês',
                        data: [1520, 1529, 1567, 1588, 1590, 1652, 1622],
                        fill: false,
                        borderColor: '#5c84f1'
                    }
                ]
            ],
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            options: {
                spanGaps: true,
                legend: {
                    display: false
                },
                maintainAspectRatio: true,
                elements: {
                    point: {
                        radius: 2,
                        borderWidth: 1,
                        hoverRadius: 2,
                        hoverBorderWidth: 1
                    },
                    line: {
                        tension: 0
                    }
                },
                layout: {
                    padding: {
                        top: 24,
                        left: 16,
                        right: 16,
                        bottom: 16
                    }
                },
                scales: {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            ticks: {
                                // min: 100,
                                // max: 500
                            }
                        }
                    ]
                }
            },
            today: '12,540',
            change: {
                value: 321,
                percentage: 2.05
            }
        },
        widget9: {
            rows: [
                {
                    title: 'Milho',
                    clicks: 362,
                    conversion: 296
                },
                {
                    title: 'Oliveira',
                    clicks: 703,
                    conversion: 900
                },
                {
                    title: 'Beterraba',
                    clicks: 532,
                    conversion: 432
                },
                {
                    title: 'Tomate',
                    clicks: 201,
                    conversion: 220
                },
                {
                    title: 'Girassol',
                    clicks: 94,
                    conversion: 108
                }
            ]
        }
    }
};

mock.onGet('/api/analytics-dashboard-app/widgets').reply((config) => {
    return [200, analyticsDashboardAppDB.widgets];
});
