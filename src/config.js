//import Firebase from "./firebase";
var Firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDYKO9FyDJpcTRfdF1OuvWjPwT3VtEeBfs",
    authDomain: "streamreact-b2b8d.firebaseapp.com",
    databaseURL: "https://streamreact-b2b8d.firebaseio.com",
    projectId: "streamreact-b2b8d",
    storageBucket: "streamreact-b2b8d.appspot.com",
    messagingSenderId: "861714344170",
    appId: "1:861714344170:web:60ba9420899ba357f60f93",
    measurementId: "G-3P0XFPKNB2"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();