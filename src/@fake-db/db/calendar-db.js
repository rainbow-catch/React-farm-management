import mock from './../mock';
import { FuseUtils } from '@fuse';

const calendarDB = {
    events: [
        {
            id: 0,
            title: 'Reunião Técnica de Sensores de Irrigação',
            allDay: true,
            start: new Date(2020, 3, 0),
            end: new Date(2020, 3, 1)
        },
        {
            id: 1,
            title: 'Reunião de fertilização da primavera',
            allDay: false,
            start: new Date(2018, 3, 7),
            end: new Date(2018, 3, 10)
        },
        {
            id: 2,
            title: 'Início da irrigação',
            allDay: false,
            start: new Date(2020, 2, 13, 0, 0, 0),
            end: new Date(2020, 2, 20, 0, 0, 0)
        },
        {
            id: 3,
            title: 'Conclusão da Irrigação',
            allDay: false,
            start: new Date(2020, 10, 6, 0, 0, 0),
            end: new Date(2020, 10, 13, 0, 0, 0)
        },
        {
            id: 4,
            title: 'Evento de Qualidade Citricos',
            allDay: false,
            start: new Date(2020, 3, 9, 0, 0, 0),
            end: new Date(2020, 3, 9, 0, 0, 0)
        },
        {
            id: 5,
            title: 'Conferencia Agricultura de Precisión',
            allDay: false,
            start: new Date(2020, 3, 11),
            end: new Date(2020, 3, 13),
            desc: 'Interés elevado por la asistencia'
        },
        {
            id: 6,
            title: 'Revisão de máquinas agrícolas',
            allDay: false,
            start: new Date(2018, 3, 12, 10, 30, 0, 0),
            end: new Date(2018, 3, 12, 12, 30, 0, 0),
            desc: 'Pre-reunión con personal finca'
        },
        {
            id: 7,
            title: 'Revisão da campanha Citrus',
            allDay: false,
            start: new Date(2020, 4, 12, 12, 0, 0, 0),
            end: new Date(2020, 4, 12, 13, 0, 0, 0),
            desc: 'Field Data Collection'
        },
        {
            id: 8,
            title: 'Tratamento fitossanitário "Rhyssomatus subtilis"',
            allDay: false,
            start: new Date(2020, 5, 12, 14, 0, 0, 0),
            end: new Date(2020, 5, 12, 15, 0, 0, 0)
        },
        {
            id: 9,
            title: 'Tratamento preventivo de herbicidas',
            allDay: false,
            start: new Date(2018, 3, 12, 17, 0, 0, 0),
            end: new Date(2018, 3, 12, 17, 30, 0, 0),
            desc: 'Dose and marked areas'
        },
        {
            id: 13,
            title: 'Reunião Técnica Agrícola',
            allDay: false,
            start: new Date(2018, 3, 20, 19, 30, 0),
            end: new Date(2018, 3, 22, 2, 0, 0)
        }
    ]
};

mock.onGet('/api/calendar-app/events').reply((config) => {
    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/add-event').reply((request) => {
    const data = JSON.parse(request.data);
    calendarDB.events = [
        ...calendarDB.events, {
            ...data.newEvent,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/update-event').reply((request) => {
    const data = JSON.parse(request.data);

    calendarDB.events = calendarDB.events.map((event) => {
        if (data.event.id === event.id) {
            return data.event
        }
        return event
    });

    return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/remove-event').reply((request) => {
    const data = JSON.parse(request.data);

    calendarDB.events = calendarDB.events.filter((event) => data.eventId !== event.id);

    return [200, calendarDB.events];
});
