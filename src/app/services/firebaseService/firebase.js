import firebase from 'firebase/app';
import config from './firebaseServiceConfig';
import 'firebase/firestore'

let fb = null;
if (!firebase.apps.length) {
    fb = firebase.initializeApp(config)
} else {
    fb = firebase.app(); // if already initialized, use that one
}

export const db = fb.database()
 