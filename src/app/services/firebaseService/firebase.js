import firebase from 'firebase/app';
import config from './firebaseServiceConfig';
import 'firebase/firestore'

const fb = firebase.initializeApp(config)
 export const db = fb.firestore()
 