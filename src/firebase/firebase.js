import * as firebase from 'firebase'; // take all named exports and assign it to the firebase variable

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDHXMkCNuUgZhzFgGdhhMRMsZdKzUgYvZ0",
  authDomain: "expensemanager-dde65.firebaseapp.com",
  databaseURL: "https://expensemanager-dde65.firebaseio.com",
  projectId: "expensemanager-dde65",
  storageBucket: "expensemanager-dde65.appspot.com",
  messagingSenderId: "68620338224"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };