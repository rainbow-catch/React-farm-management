const prodConfig = {
    
    apiKey: "AIzaSyBP93nJqKG6eafyVCfpX-3GnVcyg6fYuf0",
    authDomain: "kestrelapp-246112.firebaseapp.com",
    databaseURL: "https://kestrelapp-246112-default-rtdb.firebaseio.com/",
    projectId: "kestrelapp-246112",
    storageBucket: "kestrelapp-246112.appspot.com",
    messagingSenderId: "267089332940",
    appId: "1:267089332940:web:95b945b9c7fe0f0964d069",
    measurementId: "G-6GDZ94ZVL5"
};

const devConfig = {

    apiKey: "AIzaSyBP93nJqKG6eafyVCfpX-3GnVcyg6fYuf0",
    authDomain: "kestrelapp-246112.firebaseapp.com",
    databaseURL: "https://kestrelapp-246112-default-rtdb.firebaseio.com/",
    projectId: "kestrelapp-246112",
    storageBucket: "kestrelapp-246112.appspot.com",
    messagingSenderId: "267089332940",
    appId: "1:267089332940:web:95b945b9c7fe0f0964d069",
    measurementId: "G-6GDZ94ZVL5"

};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
