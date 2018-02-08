import React, { Component } from "react";
import { Alert } from "react-native";
import App from "./js/App";
import firebase from 'react-native-firebase';
import communications from 'react-native-communications';

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

    this.unsubscriber = null;

    if (firebase.app() == null) {
      firebase.initializeApp(firebaseConfig);
    }
    console.log(firebase.app().name);

    this.state = {
      user: null,
    }; 
  }

  componentDidMount() {
    var auth = firebase.auth();
    var messaging = firebase.messaging();
    var database = firebase.database();

    this.unsubscriber = auth.onAuthStateChanged(user => {
      this.setState({user});
      console.log(user);

      messaging.requestPermissions();
      messaging.getToken()
        .then( token => {
          console.log("token ---> ");
          console.log(token);
          console.log(auth.user);
          database.ref('logins').set({
            uid: user.uid,
            token: token,
          });
        })
        .catch(e => {
          console.log(e);
        });
    });

    messaging.onTokenRefresh(_ => {
      messaging.getToken()
        .then(refreshedToken => {
          console.log("refreshedToken ---> ");
          console.log(refreshedToken);
        })
        .catch(e => {
          console.log(e);
        })
    });

    messaging.onMessage(payload => {
      console.log("payload ---> ");
      console.log(payload);
      
      var contactNumber = payload.fcm.body
      var q = "Number:";
      var index = contactNumber.indexOf(q)+q.length;
      this.contactNumber = contactNumber.substring(index).trim();
      console.log(this.contactNumber);

      Alert.alert(payload.fcm.title,
        payload.fcm.body,
        [{text: payload.fcm.action, onPress: this.fcmAction.bind(this)}]
      );
    }).bind(this);
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  fcmAction() {
    console.log(this.contactNumber);
    Alert.alert("Action",
      "Choose your action",
      [{text: "Call", onPress: () => communications.phonecall(this.contactNumber, true)},
       {text: "SMS", onPress: () => communications.text(this.contactNumber)}]
    );
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