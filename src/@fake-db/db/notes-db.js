import mock from './../mock';
import { FuseUtils } from '@fuse';

const notesDB = {
    notes: [

        {
            "id": "5739d1fb4d27bc5341fd33b3",
            "title": "Nossos vinhos  2019",
            "description": "",
            "archive": false,
            "image": "assets/images/notes/vinos1.jpg",
            "time": "2018-05-10T04:01:06.587Z",
            "reminder": null,
            "checklist": [],
            "labels": [
                "5725a6806acf030f9341e932",
                "5725a6806acf030f9341e925"
            ]
        },
        {
            "id": "5739d1fbaac9710256574208",
            "title": "",
            "description": "As novas tecnologias, para criar um vinho de sempre. Blockchain e Sensoriamento Remoto principais aliados do vinho",
            "archive": false,
            "image": "assets/images/notes/bodegas8.jpg",
            "time": "2018-04-12T15:14:56.587Z",
            "reminder": "2018-03-03T18:08:32.587Z",
            "checklist": [],
            "labels": [
                "5725a680606588342058356d"
            ]
        },
        {
            "id": "5739d1fb843f747d5dc0e42a",
            "title": "",
            "description": "Os vinhos de 2019, têm maior qualidade do que outros anos",
            "archive": false,
            "image": "",
            "time": "2019-03-21T23:23:53.587Z",
            "reminder": null,
            "checklist": [],
            "labels": [
                "5725a6809fdd915739187ed5"
            ]
        },
        {
            "id": "5739d1fbf4e68a871a3c9ab8",
            "title": "Novas ideias",
            "description": "Deseja participar de nossos projetos?",
            "archive": false,
            "image": "assets/images/notes/bodegas7.jpg",
            "time": "2018-04-21T02:33:11.587Z",
            "reminder": null,
            "checklist": [
                {
                    "id": "1",
                    "checked": false,
                    "text": "Investidores para novos vinhos"
                },
                {
                    "id": "2",
                    "checked": false,
                    "text": "Promova nossos vinhos"
                },
                {
                    "id": "3",
                    "checked": true,
                    "text": "Procure novos mercados"
                },
                {
                    "id": "4",
                    "checked": false,
                    "text": "Encontre clientes com nossos interesses"
                }
            ],
            "labels": [
                "5725a6802d10e277a0f35739"
            ]
        },
        {
            "id": "5739d1fbf2726fe3e5e5014a",
            "title": "Contratos inteligentes",
            "description": "",
            "archive": false,
            "image": "assets/images/notes/bodegas6.jpg",
            "time": "2018-04-10T22:18:14.587Z",
            "reminder": "2019-01-13T11:09:00.587Z",
            "checklist": [
                {
                    "id": "1",
                    "checked": true,
                    "text": "Contrato de assinatura"
                },
                {
                    "id": "2",
                    "checked": true,
                    "text": "Rastreamento por satélite"
                },
                {
                    "id": "3",
                    "checked": false,
                    "text": "Captura de valores de campo de valores de qualidade"
                },
                {
                    "id": "4",
                    "checked": true,
                    "text": "Estimativa de produção"
                },
                {
                    "id": "5",
                    "checked": true,
                    "text": "Colheita"
                }
            ],
            "labels": [
                "5725a68031fdbb1db2c1af47"
            ]
        },
        {
            "id": "5739d1fb47d9bac96ec0d54d",
            "title": "Ng Calendário Conferência",
            "description": "",
            "archive": false,
            "image": "",
            "time": "2018-01-21T22:46:48.587Z",
            "reminder": "2018-05-14T06:47:19.587Z",
            "checklist": [
                {
                    "id": "1",
                    "checked": true,
                    "text": "breakfast"
                },
                {
                    "id": "2",
                    "checked": true,
                    "text": "Welcome"
                },
                {
                    "id": "3",
                    "checked": true,
                    "text": "Keynote 1 - Brad Green  Jules Kremer"
                },
                {
                    "id": "4",
                    "checked": false,
                    "text": "Precision agriculture conference in Rhondonia "
                },
                {
                    "id": "5",
                    "checked": false,
                    "text": "Wine tastings in Bodega"
                }
            ],
            "labels": [
                "5725a6809fdd915739187ed5",
                "5725a68031fdbb1db2c1af47"
            ]
        },
        {
            "id": "5739d1fbb786bea648179ece",
            "title": "",
            "description": "O início da safra",
            "archive": false,
            "image": "assets/images/notes/bodegas3.jpg",
            "time": "2019-03-11T06:55:30.587Z",
            "reminder": "2019-04-01T07:35:05.587Z",
            "checklist": [],
            "labels": [
                "5725a6802d10e277a0f35739"
            ]
        },
        {
            "id": "5739d1fbfed6d59d8427f6e3",
            "title": "Visite nossa vinícola",
            "description": "",
            "archive": false,
            "image": "assets/images/notes/bodegas2.jpg",
            "time": "2018-05-01T00:15:14.587Z",
            "reminder": null,
            "checklist": [],
            "labels": [
                "5725a6806acf030f9341e932"
            ]
        },
        {
            "id": "5739d1fbc4ebca7d947b4763",
            "title": "",
            "description": "Conheça o interior onde a magia do vinho é produzida",
            "archive": true,
            "image": "assets/images/notes/bodegas2.jpg",
            "time": "2018-01-05T15:08:41.587Z",
            "reminder": "2018-04-01T21:35:24.587Z",
            "checklist": [],
            "labels": [
                "5725a6806acf030f9341e925"
            ]
        },
        {
            "id": "5739d1fb2efbc0e3e8c30c4d",
            "title": "Bodega Dirección",
            "description": "Campilla de montearagon. Andalucia",
            "archive": false,
            "image": "assets/images/notes/bodegas5.jpg",
            "time": "2018-04-19T08:27:28.587Z",
            "reminder": null,
            "checklist": [],
            "labels": [
                "5725a6809fdd915739187ed5"
            ]
        },


        {
            "id": "5739d1fb2fe509295e0847b5",
            "title": "",
            "description": "Viajar dentro do vinho",
            "archive": false,
            "image": "assets/images/notes/bodegas4.jpg",
            "time": "2019-01-17T00:40:05.587Z",
            "reminder": null,
            "checklist": [],
            "labels": [
                "5725a6802d10e277a0f35739"
            ]
        }
    ],
    labels: [
        {
            "id": "5725a6802d10e277a0f35739",
            "name": "Turismo",
            "handle": "tourism"
        },
        {
            "id": "5725a6809fdd915739187ed5",
            "name": "Vinícola",
            "handle": "bodega"
        },
        {
            "id": "5725a68031fdbb1db2c1af47",
            "name": "qualidade",
            "handle": "quality"
        },
        {
            "id": "5725a680606588342058356d",
            "name": "Certificação",
            "handle": "certification"
        },
        {
            "id": "5725a6806acf030f9341e925",
            "name": "Blockchain",
            "handle": "blockchain"
        },
        {
            "id": "5725a6806acf030f9341e932",
            "name": "vintage",
            "handle": "harvest"
        }
    ]
};

mock.onGet('/api/notes-app/notes').reply((config) => {
    return [200, notesDB.notes];
});

mock.onGet('/api/notes-app/labels').reply((config) => {
    return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/create-note').reply((request) => {
    const data = JSON.parse(request.data);
    const newNote =
    {
        ...data.note,
        id: FuseUtils.generateGUID()
    };
    notesDB.notes = [
        newNote,
        ...notesDB.notes
    ];
    return [200, newNote];
});

mock.onPost('/api/notes-app/update-note').reply((request) => {
    const data = JSON.parse(request.data);

    notesDB.notes = notesDB.notes.map((note) => {
        if (data.note.id === note.id) {
            return data.note
        }
        return note
    });

    return [200, data.note];
});

mock.onPost('/api/notes-app/update-labels').reply((request) => {
    const data = JSON.parse(request.data);

    notesDB.labels = data.labels;

    return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/remove-note').reply((request) => {
    const data = JSON.parse(request.data);

    notesDB.notes = notesDB.notes.filter((note) => data.noteId !== note.id);

    return [200, notesDB.notes];
});

