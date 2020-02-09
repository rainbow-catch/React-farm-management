import mock from './../mock';

const fileManagerDB = {
    files: [
        {
            'id': '1',
            'name': 'Work place',
            'type': 'folder',
            'owner': 'me',
            'size': '',
            'modified': 'September 2, 2018',
            'opened': 'September 8, 2018',
            'created': 'September 1, 2018',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true
        },
        {
            'id': '2',
            'name': 'Public Documents Blockchain',
            'type': 'folder',
            'owner': 'public',
            'size': '',
            'modified': 'September 2, 2018',
            'opened': 'September 8, 2018',
            'created': 'September 1, 2018',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true
        },
        {
            'id': '3',
            'name': 'Private Documents (Only nodes)',
            'type': 'folder',
            'owner': 'me',
            'size': '',
            'modified': 'September 2, 2018',
            'opened': 'September 8, 2018',
            'created': 'September 1, 2018',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true
        },
        {
            'id': '4',
            'name': 'soybeen 47',
            'type': 'shp',
            'owner': 'Emily Bennett',
            'size': '1.2 Mb',
            'modified': 'July 8, 2019',
            'opened': 'July 8, 2019',
            'created': 'July 8, 2019',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'id': '5',
            'name': 'Contract Fertilicer',
            'type': 'Smart Contract',
            'owner': 'Emily Bennett',
            'size': '980 Kb',
            'modified': 'July 8, 2019',
            'opened': 'July 8, 2019',
            'created': 'July 8, 2019',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'id': '6',
            'name': 'Invoices',
            'type': 'blockchain ',
            'owner': 'Emily Bennett',
            'size': '750 Kb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'id': '7',
            'name': 'Quality parameter',
            'type': 'Blockchain',
            'owner': 'Emily Bennett',
            'size': '980 Mb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'id': '8',
            'name': 'System main',
            'type': 'document',
            'owner': 'Emily Bennett',
            'size': '52 Kb',
            'modified': 'July 8, 2019',
            'opened': 'July 8, 2019',
            'created': 'July 8, 2019',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'id': '9',
            'name': 'Prices of soybeen',
            'type': 'spreadsheet',
            'owner': 'Emily Bennett',
            'size': '27 Mb',
            'modified': 'July 3, 2019',
            'opened': 'Augost 1, 2019',
            'created': 'Junary 12, 2019',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'id': '10',
            'name': 'Anabelle Manual',
            'type': 'document',
            'owner': 'Emily Bennett',
            'size': '1.1 Kb',
            'modified': 'July 8, 2017',
            'opened': 'July 8, 2017',
            'created': 'July 8, 2017',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        },
        {
            'id': '11',
            'name': ' sale budget finish',
            'type': 'spreadsheet Blockchain',
            'owner': 'Emily Bennett',
            'size': '505 Kb',
            'modified': 'Octuber 12, 2019',
            'opened': 'November 7, 2019',
            'created': 'Septembrer 8, 2019',
            'extention': '',
            'location': 'My Files > Documents',
            'offline': true,
            'preview': 'assets/images/etc/sample-file-preview.jpg'
        }
    ]
};

mock.onGet('/api/file-manager-app/files').reply((config) => {
    return [200, fileManagerDB.files];
});
