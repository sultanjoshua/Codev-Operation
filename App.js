import React from "react";
import App from "./js/App";
import firebase from 'react-native-firebase';

export default class App1 extends React.Component {

  // database = null;
  // firebaseApp;

  constructor() {
    super();

    var firebaseConfig = {
      apiKey: "AIzaSyDajFDLX7j3sdbSvcnGUfbeJnFwfAcGecE",
      authDomain: "zylun-ops-app.firebaseapp.com",
      databaseURL: "https://zylun-ops-app.firebaseio.com",
      projectId: "zylun-ops-app",
      storageBucket: "zylun-ops-app.appspot.com",
      messagingSenderId: "199577270778"
    };

    firebase.initializeApp(firebaseConfig);

    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    // firebase.auth().signInAnonymously()
    //   .then((user) => {
    //     console.log(user.isAnonymous);
    //   });

    // createEmployee('josh', 'joshuas@codev.com');

    firebase.database().ref('employees').on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        alert('Username: ' + childData.username + " email: " + childData.email);
        console.log('Username: ' + childData.username + " email: " + childData.email);
      });
    });
  }

  createEmployee(name, email) {
    var key = firebase.database().ref().child('employees').push().key;

    firebase.database().ref('employees/' + key).set({
      username: name,
      email: email
    });
  }

  render() {
    return <App />;
  }
}