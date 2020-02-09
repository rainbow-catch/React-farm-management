const prodConfig = {
    
    apiKey: "AIzaSyCIHc0iqU4hMJP7dBI10ZbhfMIo_96HFuw",
    authDomain: "new-app-252008.firebaseapp.com",
    databaseURL: "https://new-app-252008.firebaseio.com",
    projectId: "new-app-252008",
    storageBucket: "new-app-252008.appspot.com",
    messagingSenderId: "826379870056",
    appId: "1:826379870056:web:d1f660c45e21e3d39f80dd",
    measurementId: "G-1L1L2YTYWX"
};

const devConfig = {

    apiKey: "AIzaSyCIHc0iqU4hMJP7dBI10ZbhfMIo_96HFuw",
    authDomain: "new-app-252008.firebaseapp.com",
    databaseURL: "https://new-app-252008.firebaseio.com",
    projectId: "new-app-252008",
    storageBucket: "new-app-252008.appspot.com",
    messagingSenderId: "826379870056",
    appId: "1:826379870056:web:d1f660c45e21e3d39f80dd",
    measurementId: "G-1L1L2YTYWX"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
