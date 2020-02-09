//import { MaterialUIComponentsNavigation } from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import { authRoles } from 'app/auth';

const navigationConfig = [
    {
        'id': 'applications',
        'title': 'Aplicações',
        'type': 'group',
        'icon': 'apps',
        'children': [
            {
                'id': 'dashboards',
                'title': 'Dashboards',
                'type': 'collapse',
                'icon': 'dashboard',
                'children': [
                    {
                        'id': 'analytics-dashboard',
                        'title': 'Análise',
                        'type': 'item',
                        'url': '/apps/dashboards/analytics'
                    },
                    {
                        'id': 'project-dashboard',
                        'title': 'Irrigação',
                        'type': 'item',
                        'url': '/apps/dashboards/project'
                    }
                ]
            },
            {
                'id': 'calendar',
                'title': 'Calendário',
                'type': 'item',
                'icon': 'today',
                'url': '/apps/calendar'
            },
            {
                'id': 'e-commerce',
                'title': 'E-Commerce',
                'type': 'collapse',
                'icon': 'shopping_cart',
                'url': '/apps/e-commerce',
                'children': [
                    {
                        'id': 'e-commerce-products',
                        'title': 'Productos',
                        'type': 'item',
                        'url': '/apps/e-commerce/products',
                        'exact': true
                    },
                    {
                        'id': 'e-commerce-product-detail',
                        'title': 'Productos Detalle',
                        'type': 'item',
                        'url': '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
                        'exact': true
                    },
                    {
                        'id': 'e-commerce-new-product',
                        'title': 'Novo produto',
                        'type': 'item',
                        'url': '/apps/e-commerce/products/new',
                        'exact': true
                    },
                    {
                        'id': 'e-commerce-orders',
                        'title': 'Encomendas',
                        'type': 'item',
                        'url': '/apps/e-commerce/orders',
                        'exact': true
                    },
                    {
                        'id': 'e-commerce-order-detail',
                        'title': '',
                        'type': 'Detalhe dos pedidos',
                        'url': '/apps/e-commerce/orders/1',
                        'exact': true
                    }
                ]
            },
            {
                'id': 'academy',
                'title': 'Academia',
                'type': 'item',
                'icon': 'school',
                'url': '/apps/academy'
            },

            {
                'id': 'file-manager',
                'title': 'Arquivos Blockchain',
                'type': 'item',
                'icon': 'folder',
                'url': '/apps/file-manager'
            },
            {
                'id': 'contacts',
                'title': 'Contatos',
                'type': 'item',
                'icon': 'account_box',
                'url': '/apps/contacts/all'
            },
            {
                'id': 'notes',
                'title': 'Suas Notícias',
                'type': 'item',
                'icon': 'developer_board',
                'url': '/apps/notes'
            }
        ]
    },

    {
        'id': 'Crops',
        'title': 'Cultivos',
        'type': 'group',
        'auth': authRoles.user1,//['admin']
        'icon': 'add_photo_alternate',
        'children': [



            {
                'id': 'Grape',
                'title': 'videira',
                'auth': authRoles.user1,
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'Merlot',
                        'title': 'Merlot',
                        'type': 'collapse',
                        'badge': {
                            'title': 3,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'Merlot',
                                'title': 'Monitorización',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/grape/Merlot'
                            }




                        ]
                    },
                    {
                        'id': 'monitoring',
                        'title': 'Tempranillo',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [
                            {
                                'id': 'monitoring',
                                'title': 'Monitorización',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/grape/Tempranillo'
                            }



                        ]
                    },

                ]
            },
            {
                'id': 'almond',
                'title': 'Amêndoa',
                'type': 'collapse',
                'auth': authRoles.admin,
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'planeta',
                        'title': 'Planeta',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringAlmonds',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/almonds/almonds'
                            }




                        ]
                    }


                ]
            },
            {
                'id': 'cotton',
                'title': 'Algodão',
                'auth': authRoles.admin,
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'cottonSpain',
                        'title': 'Espanha',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringCotton',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/cotton/cotton'
                            }




                        ]
                    }


                ]
            },
            {
                'id': 'nogal',
                'title': 'Noz',
                'auth': authRoles.admin,
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'cottonSpain',
                        'title': 'España',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringCotton',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/nogal/nogal'
                            }


                        ]
                    }


                ]
            },

            {
                'id': 'coffe',
                'title': 'Café',
                'auth': authRoles.admin,
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'kenia',
                        'title': 'Quênia',
                        'type': 'collapse',
                        'badge': {
                            'title': 3,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringCoffe',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/coffe/coffe'
                            }




                        ]
                    }


                ]
            },
            {
                'id': 'rice',
                'title': 'Arroz',
                'auth': authRoles.admin,
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'Keniarice',
                        'title': 'Quênia',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringRice',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/rice/rice'
                            }




                        ]
                    }


                ]
            },
            {
                'id': 'tomatos',
                'title': 'Tomates',
                'auth': authRoles.admin,
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'planeta',
                        'title': 'Italiano',
                        'type': 'collapse',
                        'badge': {
                            'title': 3,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringTomato',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/tomato/tomato'
                            }




                        ]
                    }


                ]
            }
        ]
    },
    {
        'id': 'forester',
        'title': 'Silvicultura',
        'auth': authRoles.admin,//['admin']
        'type': 'group',
        'icon': 'add_photo_alternate',
        'children': [

            {
                'id': 'pinus',
                'title': 'Pinos',
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'pinusi',
                        'title': 'Pinus elliotti',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringPinus',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/forester/pelliotti'
                            }




                        ]
                    },
                    {
                        'id': 'pinusii',
                        'title': 'Pinus caribaea',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [
                            {
                                'id': 'monitoring Pcaribaea',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/forester/pcaribaea'
                            }



                        ]
                    },

                ]
            },
            {
                'id': 'eucalipto',
                'title': 'Eucalipto',
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'globullus',
                        'title': ' E globulus',
                        'type': 'collapse',
                        'badge': {
                            'title': 2,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'monitoringCR',
                                'title': 'Monitoramento',
                                'type': 'item',
                                'url': '/ui/page-layouts/crops/forester/eglobulus'
                            }




                        ]
                    }


                ]
            }

        ]
    },

    {
        'id': 'climat',
        'title': 'Tempo',
        'type': 'group',
        'icon': 'cloud_queue',
        'children': [

            {
                'id': 'Climat_Crop',
                'title': 'Cultivo do Clima',
                'type': 'collapse',
                'icon': 'view_quilt',
                'children': [
                    {
                        'id': 'Crop Climat',
                        'title': 'Cultivo',
                        'type': 'collapse',
                        'badge': {
                            'title': 3,
                            'bg': '#525E8A',
                            'fg': '#FFFFFF'
                        },
                        'children': [

                            {
                                'id': 'grape_climat',
                                'title': 'Clima Vine',
                                'type': 'item',
                                'url': '/ui/page-layouts/carded/climat/GrapeClimat'
                            },
                            {
                                'id': 'Pinus climat',
                                'title': 'Clima Pine',
                                'auth': authRoles.admin,
                                'type': 'item',
                                'url': '/ui/page-layouts/carded/climat/PinusClimat'
                            },
                            {
                                'id': 'Nogal climat',
                                'title': 'Clima Noz',
                                'auth': authRoles.admin,
                                'type': 'item',
                                'url': '/ui/page-layouts/carded/climat/NogalClimat'
                            }


                        ]
                    }


                ]
            }


        ]
    },



    {
        'id': 'i_d',
        'title': 'I+D+I',
        'type': 'group',
        'icon': 'add_photo_alternate',
        'children': [

            {
                'id': 'remove_cloud',
                'title': '2020',
                'type': 'item',
                'icon': 'view_quilt',
                'url': '/ui/page-layouts/carded/climat/I_D'

            }



        ]
    },



    {
        'id': 'test-group-level-1',
        'title': 'Histórico',
        'type': 'group',
        'icon': 'camera',
        'children': [


            {
                'id': 'test-collapse-level-1',
                'title': 'Vinhedo 2019',
                'type': 'collapse',
                'icon': 'dashboard',
                'children': [
                    {
                        'id': 'test-item-level-1',
                        'title': 'Tempranillo 2019',
                        'type': 'item',
                        'url': 'https://datastudio.google.com/reporting/1rbgZaZHspwt5L4S9RGPgu0OGsypR8ezF'
                    },
                    {
                        'id': 'test-link-level-1',
                        'title': 'Merlot 2019',
                        'type': 'link',
                        'url': 'https://datastudio.google.com/u/0/reporting/1_VLRWbpvN-n1FtFJzWo8j8K4D8X-QBJU/page/YQhw',
                        'target': '_blank'
                    }


                ]
            }
        ]
    }
];

export default navigationConfig;
