import mock from './../mock';

const projectDashboardAppDB = {
    widgets: {
        'widget1': {
            'ranges': {
                'DY': 'Yesterday',
                'DT': 'Today',
                'DTM': 'Last Week'
            },
            'currentRange': 'DT',
            'data': {
                'label': 'Constante dielétrica',
                'count': {
                    'DY': 21,
                    'DT': 25,
                    'DTM': 19
                },
                'extra': {
                    'label': 'Min',
                    'count': {
                        'DY': 6,
                        'DT': 7,
                        'DTM': '-'
                    }

                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget2': {
            'title': 'Umidade Volumétrica',
            'data': {
                'label': 'VH%',
                'count': 4,
                'extra': {
                    'label': 'Ontem\'s RH%',
                    'count': 3
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget3': {
            'title': 'Referência de Umidade',
            'data': {
                'label': 'Aberto',
                'count': 32,
                'extra': {
                    'label': 'Fechado hoje',
                    'count': 0
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget4': {
            'title': 'Chuva',
            'data': {
                'label': 'Semana passada',
                'count': 8,
                'extra': {
                    'label': 'Total',
                    'count': 14
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget5': {
            'title': 'Sensor 2 Today',
            'ranges': {
                'TW': '(Atu) Semana',
                'LW': '1 (Pass) Semana',
                '2W': '2 (Pass) Semana'
            },
            'mainChart': {
                'TW': {
                    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
                    datasets: [
                        {
                            type: 'bar',
                            label: 'CD',
                            data: [35, 28, 43, 34, 20, 25, 22, 35, 28, 25, 33],
                            backgroundColor: '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type: 'bar',
                            label: 'HV',
                            data: [11, 10, 8, 11, 8, 10, 17, 19, 25, 29, 25],
                            backgroundColor: '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                '2W': {
                    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
                    datasets: [
                        {
                            type: 'bar',
                            label: 'CD',
                            data: [35, 28, 43, 34, 20, 25, 22, 35, 28, 25, 33],
                            backgroundColor: '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type: 'bar',
                            label: 'HV',
                            data: [11, 10, 8, 11, 8, 10, 17, 19, 25, 29, 25],
                            backgroundColor: '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                'LW': {
                    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
                    datasets: [
                        {
                            type: 'bar',
                            label: 'CD',
                            data: [37, 24, 51, 31, 29, 17, 31, 25, 29, 19, 22],
                            backgroundColor: '#42BFF7',
                            hoverBackgroundColor: '#87cdf7'
                        },
                        {
                            type: 'bar',
                            label: 'HV',
                            data: [12, 8, 7, 13, 7, 6, 10, 14, 25, 33, 26],
                            backgroundColor: '#c6ecfd',
                            hoverBackgroundColor: '#d7effd'
                        }
                    ]
                },
                'options': {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        mode: 'label'
                    },
                    scales: {
                        xAxes: [
                            {
                                stacked: true,
                                display: true,
                                gridLines: {
                                    display: false
                                },
                                labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
                                categoryPercentage: 1
                            }
                        ],
                        yAxes: [
                            {
                                stacked: true,
                                type: 'linear',
                                display: true,
                                position: 'left',
                                gridLines: {
                                    display: false
                                },
                                labels: {
                                    show: true
                                }
                            }
                        ]
                    }
                }
            },
            'supporting': {
                'created': {
                    'label': 'Lunes',
                    'count': {
                        '2W': 48,
                        'LW': 46,
                        'TW': 54
                    },
                    'chart': {
                        '2W': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [5, 8, 5, 6, 7, 8, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'LW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 3, 7, 5, 5, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'TW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [3, 2, 1, 4, 8, 8, 4],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'closed': {
                    'label': 'Terça-feira',
                    'count': {
                        '2W': 27,
                        'LW': 31,
                        'TW': 26
                    },
                    'chart': {
                        'TW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 3, 7, 5, 5, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        '2W': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [3, 2, 1, 4, 8, 8, 4],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'LW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 5, 4, 5, 7, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'reOpened': {
                    'label': 'Quarta-feira',
                    'count': {
                        '2W': 4,
                        'LW': 5,
                        'TW': 2
                    },
                    'chart': {
                        '2W': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 3, 7, 5, 5, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'LW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [5, 7, 8, 8, 6, 4, 1],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'TW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [3, 2, 1, 4, 8, 8, 4],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'TW2': [
                            {
                                'name': 'Quinta-feira',
                                'series': [
                                    {
                                        'name': 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name': 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name': 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name': 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name': 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name': 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'wontFix': {
                    'label': 'Sexta-feira',
                    'count': {
                        '2W': 6,
                        'LW': 3,
                        'TW': 4
                    },
                    'chart': {
                        '2W': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [5, 7, 4, 6, 5, 3, 2],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'LW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 3, 7, 5, 5, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'TW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 5, 4, 5, 7, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'needsTest': {
                    'label': 'Sábado',
                    'count': {
                        '2W': 10,
                        'LW': 7,
                        'TW': 8
                    },
                    'chart': {
                        '2W': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 5, 4, 5, 7, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'LW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [5, 7, 8, 8, 6, 4, 1],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'TW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 3, 7, 5, 5, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                },
                'fixed': {
                    'label': 'Domingo',
                    'count': {
                        '2W': 21,
                        'LW': 17,
                        'TW': 14
                    },
                    'chart': {
                        '2W': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [5, 7, 8, 8, 6, 4, 1],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        'LW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [6, 5, 4, 5, 7, 4, 7],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        'TW': {
                            datasets: [
                                {
                                    label: 'HV%',
                                    data: [5, 7, 4, 6, 5, 3, 2],
                                    fill: true,
                                    backgroundColor: '#42BFF7',
                                    pointRadius: 0,
                                    pointHitRadius: 20,
                                    borderWidth: 0
                                }
                            ],
                            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
                        },
                        options: {
                            legend: {
                                display: false
                            },
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [
                                    {
                                        display: false
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: false
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        },
        'widget6': {
            'title': 'Umidade Volumétrica',
            'ranges': {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'currentRange': 'TW',
            'mainChart': {
                labels: [
                    'Sensor 1',
                    'Sensor 2',
                    'Sensor 3',
                    'Sensor 4'
                ],
                datasets: {
                    'TW': [
                        {
                            data: [15, 20, 38, 27],
                            backgroundColor: [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f'
                            ]
                        }
                    ],
                    'LW': [
                        {
                            data: [19, 16, 42, 23],
                            backgroundColor: [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f'
                            ]
                        }
                    ],
                    '2W': [
                        {
                            data: [18, 17, 40, 25],
                            backgroundColor: [
                                '#f44336',
                                '#9c27b0',
                                '#03a9f4',
                                '#e91e63'
                            ],
                            hoverBackgroundColor: [
                                '#f45a4d',
                                '#a041b0',
                                '#25b6f4',
                                '#e9487f'
                            ]
                        }
                    ]
                },
                options: {
                    cutoutPercentage: 66,
                    spanGaps: false,
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 16,
                            usePointStyle: true
                        }
                    },
                    maintainAspectRatio: false
                }
            },
            'footerLeft': {
                'title': 'Referência global Constante Dielétrica',
                'count': {
                    '2W': 24,
                    'LW': 36,
                    'TW': 32
                }
            },
            'footerRight': {
                'title': 'Referência global Umidade Volumétrica',
                'count': {
                    '2W': 15,
                    'LW': 18,
                    'TW': 22
                }
            }
        },
        'widget7': {
            'title': 'Calendário de Manutenção',
            'currentRange': 'T',
            'ranges': {
                'T': 'Setembro',
                'TM': 'Outubro'
            },
            'schedule': {
                'T': [
                    {
                        'id': 1,
                        'title': 'Sensor 2',
                        'Main': 'Capsule Review',
                        'time': '5-Set'
                    },
                    {
                        'id': 2,
                        'title': 'Sensor 1',
                        'time': '1-Set'
                    },
                    {
                        'id': 3,
                        'title': 'Sensor 3',
                        'time': '15-Set'
                    },
                    {
                        'id': 4,
                        'title': 'Sensor 4',
                        'time': '25-Set'
                    }

                ],
                'TM': [
                    {
                        'id': 1,
                        'title': 'Sensor 2',
                        'Main': 'Capsule Review',
                        'time': '5-Oct'
                    },
                    {
                        'id': 2,
                        'title': 'Sensor 1',
                        'time': '1-Oct'
                    },
                    {
                        'id': 3,
                        'title': 'Sensor 3',
                        'time': '15-Oct'
                    },
                    {
                        'id': 4,
                        'title': 'Sensor 4',
                        'time': '25-Oct'
                    }

                ]
            }
        },
        'widget8': {
            'title': 'Consumo de irrigação',
            'mainChart': {
                labels: [
                    'Sector 1',
                    'Sector 2',
                    'Sector 3',
                    'Sector 4',
                    'Sector 5'
                ],
                datasets: [
                    {
                        data: [12, 17, 28, 25, 15],
                        backgroundColor: [
                            '#f44336',
                            '#9c27b0',
                            '#03a9f4',
                            '#e91e63',
                            '#ffc107'
                        ],
                        hoverBackgroundColor: [
                            '#f45a4d',
                            '#a041b0',
                            '#25b6f4',
                            '#e9487f',
                            '#ffd341'
                        ]
                    }
                ],
                options: {
                    cutoutPercentage: 0,
                    spanGaps: false,
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 16,
                            usePointStyle: true
                        }
                    },
                    maintainAspectRatio: false
                }
            }
        },
        'widget9': {
            'title': 'Consumo Semanal',
            'ranges': {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'currentRange': 'TW',
            'weeklySpent': {
                'title': 'Velocidade Gasto',
                'count': {
                    '2W': '2,682.85',
                    'LW': '2,445.34',
                    'TW': '3,630.15'
                },
                'chart': {
                    '2W': {
                        datasets: [
                            {
                                label: 'm3',
                                data: [2, 6, 5, 4, 5, 3, 6],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    'LW': {
                        datasets: [
                            {
                                label: 'Creado',
                                data: [4, 6, 2, 2, 1, 3, 4],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    'TW': {
                        datasets: [
                            {
                                label: 'Creado',
                                data: [2, 6, 5, 4, 5, 3, 6],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    }
                }
            },
            'totalSpent': {
                'title': 'DESPESA TOTAL',
                'count': {
                    '2W': '29,682.85 ',
                    'LW': '31,128.19 ',
                    'TW': '34,758.34 '
                },
                'chart': {
                    '2W': {
                        datasets: [
                            {
                                label: 'm3',
                                data: [3, 2, 2, 4, 7, 7, 4],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    'LW': {
                        datasets: [
                            {
                                label: 'm3',
                                data: [5, 7, 8, 8, 6, 4, 1],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    'TW': {
                        datasets: [
                            {
                                label: 'm3',
                                data: [6, 4, 7, 5, 5, 4, 7],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    }
                }
            },
            'remaining': {
                'title': 'REMANENTE',
                'count': {
                    '2W': '94.317,15 ',
                    'LW': '92.871,81 ',
                    'TW': '89.241,66 '
                },
                'chart': {
                    '2W': {
                        datasets: [
                            {
                                label: 'm3',
                                data: [1, 4, 5, 7, 8, 2, 4],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    'LW': {
                        datasets: [
                            {
                                label: 'm3',
                                data: [3, 2, 1, 4, 8, 8, 4],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    'TW': {
                        datasets: [
                            {
                                label: 'm3',
                                data: [2, 4, 8, 6, 2, 5, 1],
                                fill: true,
                                backgroundColor: '#42BFF7',
                                pointRadius: 0,
                                pointHitRadius: 20,
                                borderWidth: 0
                            }
                        ],
                        labels: ['s-f', 't-f', 'q-f', 'qu-f', 's-f', 'Sab', 'Dom']
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [
                                {
                                    display: false
                                }
                            ],
                            yAxes: [
                                {
                                    display: false
                                }
                            ]
                        }
                    }
                }
            },
            'totalBudget': {
                'title': 'CONSUMO TOTAL',
                'count': '124.000,00 m3'
            }
        },
        'widget10': {
            'title': 'Detalhe de consumo',
            'table': {
                'columns': [
                    {
                        'id': 'budget_type',
                        'title': 'Sector'
                    },
                    {
                        'id': 'total_budget',
                        'title': 'Consumo total'
                    },
                    {
                        'id': 'spent_usd',
                        'title': 'Velocidade (m3/h)'
                    },
                    {
                        'id': 'spent_perc',
                        'title': 'Gasto (%)'
                    },
                    {
                        'id': 'remaining_usd',
                        'title': 'Projetado (m3)'
                    },
                    {
                        'id': 'remaining_perc',
                        'title': ' Remanescente Projetado (%)'
                    }
                ],
                'rows': [
                    {
                        'id': 1,
                        'cells': [
                            {
                                'id': 'budget_type',
                                'value': 'Sector 3',
                                'classes': 'bg-blue text-white',
                                'icon': ''
                            },
                            {
                                'id': 'Total consumption',
                                'value': '14,880.00 m3',
                                'classes': 'font-bold',
                                'icon': ''
                            },
                            {
                                'id': 'spent_usd',
                                'value': '14,000.00 m3 ',
                                'classes': '',
                                'icon': ''
                            },
                            {
                                'id': 'spent_perc',
                                'value': '%94.08',
                                'classes': 'text-green',
                                'icon': 'trending_up'
                            },
                            {
                                'id': 'remaining_usd',
                                'value': '880.00 m3',
                                'classes': '',
                                'icon': ''
                            },
                            {
                                'id': 'remaining_perc',
                                'value': '%5.92',
                                'classes': '',
                                'icon': ''
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'cells': [
                            {
                                'id': 'budget_type',
                                'value': 'Sector 2',
                                'classes': 'bg-green text-white',
                                'icon': ''
                            },
                            {
                                'id': 'total_budget',
                                'value': '21,080.00 m3',
                                'classes': 'font-bold',
                                'icon': ''
                            },
                            {
                                'id': 'spent_usd',
                                'value': '17,240.34 m3',
                                'classes': '',
                                'icon': 'trending_up'
                            },
                            {
                                'id': 'spent_perc',
                                'value': '%81.78',
                                'classes': 'text-green',
                                'icon': 'trending_up'
                            },
                            {
                                'id': 'remaining_usd',
                                'value': '3,839.66 m3',
                                'classes': '',
                                'icon': ''
                            },
                            {
                                'id': 'remaining_perc',
                                'value': '%18.22',
                                'classes': '',
                                'icon': ''
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'cells':
                            [
                                {
                                    'id': 'budget_type',
                                    'value': 'Sector 4',
                                    'classes': 'bg-red text-white',
                                    'icon': ''
                                },
                                {
                                    'id': 'total_budget',
                                    'value': '34,720.00 m3',
                                    'classes': 'font-bold',
                                    'icon': ''
                                },
                                {
                                    'id': 'spent_usd',
                                    'value': '3,518.00 m3',
                                    'classes': '',
                                    'icon': ''
                                },
                                {
                                    'id': 'spent_perc',
                                    'value': '%10.13',
                                    'classes': 'text-red',
                                    'icon': 'trending_down'
                                },
                                {
                                    'id': 'remaining_usd',
                                    'value': '31,202.00 m3',
                                    'classes': '',
                                    'icon': ''
                                },
                                {
                                    'id': 'remaining_perc',
                                    'value': '%89.87',
                                    'classes': '',
                                    'icon': ''
                                }
                            ]
                    },
                    {
                        'id': 4,
                        'cells':
                            [
                                {
                                    'id': 'budget_type',
                                    'value': 'Sector 1',
                                    'classes': 'bg-pink text-white',
                                    'icon': ''
                                },
                                {
                                    'id': 'total_budget',
                                    'value': '34,720.00 m3',
                                    'classes': 'font-bold',
                                    'icon': ''
                                },
                                {
                                    'id': 'spent_usd',
                                    'value': '0.00 m3',
                                    'classes': '',
                                    'icon': ''
                                },
                                {
                                    'id': 'spent_perc',
                                    'value': '%0.00',
                                    'classes': 'text-blue',
                                    'icon': 'trending_flat'
                                },
                                {
                                    'id': 'remaining_usd',
                                    'value': '34,720.00 m3',
                                    'classes': '',
                                    'icon': ''
                                },
                                {
                                    'id': 'remaining_perc',
                                    'value': '%100.00',
                                    'classes': '',
                                    'icon': ''
                                }
                            ]
                    },
                    {
                        'id': 5,
                        'cells':
                            [
                                {
                                    'id': 'budget_type',
                                    'value': 'Sector 5',
                                    'classes': 'bg-orange text-white',
                                    'icon': ''
                                },
                                {
                                    'id': 'total_budget',
                                    'value': '18,600.00 m3',
                                    'classes': 'font-bold',
                                    'icon': ''
                                },
                                {
                                    'id': 'spent_usd',
                                    'value': '$0.00',
                                    'classes': '',
                                    'icon': ''
                                },
                                {
                                    'id': 'spent_perc',
                                    'value': '%0.00',
                                    'classes': 'text-blue',
                                    'icon': 'trending_flat'
                                },
                                {
                                    'id': 'remaining_usd',
                                    'value': '34,720.00 m3',
                                    'classes': '',
                                    'icon': ''
                                },
                                {
                                    'id': 'remaining_perc',
                                    'value': '%100.00',
                                    'classes': '',
                                    'icon': ''
                                }
                            ]
                    }
                ]
            }
        },
        'widget11': {
            'title': 'Equipamento',
            'table': {
                'columns': [
                    {
                        'id': 'avatar',
                        'title': ''
                    },
                    {
                        'id': 'name',
                        'title': 'Name'
                    },
                    {
                        'id': 'position',
                        'title': 'Position'
                    },
                    {
                        'id': 'office',
                        'title': 'Office'
                    },
                    {
                        'id': 'email',
                        'title': 'Email'
                    },
                    {
                        'id': 'phone',
                        'title': 'Phone'
                    }
                ],
                'rows': [
                    {
                        'id': 1,
                        'cells': [
                            {
                                id: 'avatar',
                                value: 'assets/images/avatars/james.jpg'
                            },
                            {
                                id: 'name',
                                value: 'Jack Gilbert'
                            },
                            {
                                id: 'position',
                                value: 'Agricultural Technician'
                            },
                            {
                                id: 'office',
                                value: 'Johor Bahru'
                            },
                            {
                                id: 'email',
                                value: 'jgilbert48@mail.com'
                            },
                            {
                                id: 'phone',
                                value: '+16 298 032 7774'
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'cells': [
                            {
                                id: 'avatar',
                                value: 'assets/images/avatars/katherine.jpg'
                            },
                            {
                                id: 'name',
                                value: 'Kathy Anderson'
                            },
                            {
                                id: 'position',
                                value: 'office'
                            },
                            {
                                id: 'office',
                                value: 'Solţānābād'
                            },
                            {
                                id: 'email',
                                value: 'kanderson49@mail.com.br'
                            },
                            {
                                id: 'phone',
                                value: '+23 572 311 1136'
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'cells': [
                            {
                                id: 'avatar',
                                value: 'assets/images/avatars/garry.jpg'
                            },
                            {
                                id: 'name',
                                value: 'Gary Gonzalez'
                            },
                            {
                                id: 'position',
                                value: 'Bilding'
                            },
                            {
                                id: 'office',
                                value: 'Gangkou'
                            },
                            {
                                id: 'email',
                                value: 'ggonzalez4r@mail.cc'
                            },
                            {
                                id: 'phone',
                                value: '+10 862 046 7916'
                            }
                        ]
                    },
                    {
                        'id': 4,
                        'cells': [
                            {
                                id: 'avatar',
                                value: 'assets/images/avatars/andrew.jpg'
                            },
                            {
                                id: 'name',
                                value: 'Mark Turner'
                            },
                            {
                                id: 'position',
                                value: 'Recruiting Manager'
                            },
                            {
                                id: 'office',
                                value: 'Neftegorsk'
                            },
                            {
                                id: 'email',
                                value: 'mturner4a@mail.com'
                            },
                            {
                                id: 'phone',
                                value: '+01 139 803 9263'
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'cells': [
                            {
                                id: 'avatar',
                                value: 'assets/images/avatars/jane.jpg'
                            },
                            {
                                id: 'name',
                                value: 'Kathryn Martinez'
                            },
                            {
                                id: 'position',
                                value: 'Director of Sales'
                            },
                            {
                                id: 'office',
                                value: 'Palekastro'
                            },
                            {
                                id: 'email',
                                value: 'kmartinez4b@mail.com'
                            },
                            {
                                id: 'phone',
                                value: '+25 467 022 5393'
                            }
                        ]
                    },
                    {
                        'id': 6,
                        'cells': [
                            {
                                id: 'avatar',
                                value: 'assets/images/avatars/alice.jpg'
                            },
                            {
                                id: 'name',
                                value: 'Annie Gonzales'
                            },
                            {
                                id: 'position',
                                value: 'Actuary'
                            },
                            {
                                id: 'office',
                                value: 'Candon'
                            },
                            {
                                id: 'email',
                                value: 'agonzales4c@mail.edu'
                            },
                            {
                                id: 'phone',
                                value: '+99 891 619 7138'
                            }
                        ]
                    }


                ]
            }
        },
        'weatherWidget': {
            'locations': {
                'NewYork': {
                    'name': 'Sevilla',
                    'icon': 'rainy2',
                    'temp': {
                        'C': '22',
                        'F': '72'
                    },
                    'windSpeed': {
                        'KMH': 12,
                        'MPH': 7.5
                    },
                    'windDirection': 'NW',
                    'rainProbability': '98%',
                    'next3Days': [
                        {
                            'name': 'Domingo',
                            'icon': 'rainy',
                            'temp': {
                                'C': '21',
                                'F': '70'
                            }
                        },
                        {
                            'name': 'Lunes',
                            'icon': 'cloudy',
                            'temp': {
                                'C': '19',
                                'F': '66'
                            }
                        },
                        {
                            'name': 'Martes',
                            'icon': 'windy3',
                            'temp': {
                                'C': '24',
                                'F': '75'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'NewYork',
            'tempUnit': 'C',
            'speedUnit': 'KMH'
        }
    },
    projects: [
        {
            'id': 1,
            'name': 'Irriapp'
        },
        {
            'id': 2,
            'name': 'Partner 2'
        },
        {
            'id': 3,
            'name': 'Partner 3'
        },
        {
            'id': 4,
            'name': 'Partner 4'
        }
    ]
};

mock.onGet('/api/project-dashboard-app/widgets').reply((config) => {
    return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply((config) => {
    return [200, projectDashboardAppDB.projects];
});
