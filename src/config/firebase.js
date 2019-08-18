const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyCPPdHdcSL95IN9rvC2TyXwS07lHGP-MfU",
    authDomain: "isa-todo-app.firebaseapp.com",
    databaseURL: "https://isa-todo-app.firebaseio.com",
    projectId: "isa-todo-app",
    storageBucket: "",
    messagingSenderId: "328283698831",
    appId: "1:328283698831:web:b541b48a7bdf882c"
}

const app = firebase.initializeApp(config)


export const db = app.database()

