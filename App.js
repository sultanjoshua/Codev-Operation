import React, { Component } from "react";
import { Alert } from "react-native";
import App from "./js/App";
import firebase from 'react-native-firebase';

export default class App1 extends React.Component {

  constructor(props) {
    super(props);

    var firebaseConfig = {
      apiKey: "AIzaSyDajFDLX7j3sdbSvcnGUfbeJnFwfAcGecE",
      authDomain: "zylun-ops-app.firebaseapp.com",
      databaseURL: "https://zylun-ops-app.firebaseio.com",
      projectId: "zylun-ops-app",
      storageBucket: "zylun-ops-app.appspot.com",
      messagingSenderId: "199577270778"
    };

    if (firebase.app() == null) {
      firebase.initializeApp(firebaseConfig);
    }
    console.log(firebase.app().name);

    this.state = {
      isReady: false
    }; 
  }

  componentDidMount() {
    // firebase.auth().signInAnonymously()
    //   .then((user) => {
    //     console.log(user.isAnonymous);
    //   });

    // this.createEmployee('josh', 'joshuas@codev.com');
    // this.createEmployee('joshua', 'joshuas@codev.com');

    // firebase.database().ref('employees').on('value', function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();

    //     // alert('Username: ' + childData.username + " email: " + childData.email);
    //     console.log('Username: ' + childData.username + " email: " + childData.email);
    //   });
    // });


  // var admin = require("firebase-admin");

  // var serviceAccount = require("./zylun-ops-app-e7b7d1c0043c.json");

  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount),
  //   databaseURL: "https://zylun-ops-app.firebaseio.com"
  // });

    // firebase.auth().signInAnonymously()
    //   .then(user => {
    //     console.log("user ---> ");
    //     console.log(user);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });

    firebase.messaging().requestPermissions();
    firebase.messaging().getToken()
      .then(token => {
        console.log("token ---> ");
        console.log(token);
      })
      .catch(e => {
        console.log(e);
      });

    firebase.messaging().onTokenRefresh(_ => {
      firebase.messaging().getToken()
      .then(refreshedToken => {
        console.log("refreshedToken ---> ");
        console.log(refreshedToken);
      })
      .catch(e => {
        console.log(e);
      });
    });

    firebase.messaging().onMessage(payload => {
      console.log("payload ---> ");
      console.log(payload);
      
      Alert.alert(payload.fcm.title,
        payload.fcm.body,
        [{text: payload.fcm.action, onPress: () => console.log("Did press "+ payload.fcm.action)}]
      );
    });

  // var payload = {
  //                 "message":{
  //                   "token" : "d8r3IMZHM_s:APA91bE8G0VTwLidACNhyr_TYwVYfzvxqsfOIfqhloxSDSBeALYx8fCWqqmsZRstij5LN6UcHStmfY-jhRbgvuP7P3JUulNJUjBJv4z22DtVEt0wW6W_PgdwTP5Wv1gtT_flLl88x28u",
  //                   "notification" : {
  //                                     "body" : "This is an FCM notification message!",
  //                                     "title" : "FCM Message",
  //                                     }
  //                 }
  //               }

  //   firebase.messaging().send("199577270778", payload)
  //     .then(result =>{
  //       console.log("result ---> ");
  //       console.log(result);
  //     })
      
  }

  // createEmployee(name, email) {
  //   var key = firebase.database().ref().child('employees').push().key;

  //   firebase.database().ref('employees/' + key).set({
  //     username: name,
  //     email: email
  //   });
  // }

  render() {
    return <App />;
  }
}