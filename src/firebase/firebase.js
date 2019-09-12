import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);

const database = firebase.database();
const db = firebase.firestore();

export { firebase, database as default, db };