import React from "react";
import App from "./js/App";
import firebase from 'react-native-firebase';

export default class App1 extends React.Component {

  // database = null;
  // firebaseApp;

  dataFirebase = null;

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

    //this.createEmployee('josh', 'joshuas@codev.com');
    //this.createEmployee('joshua', 'joshuas@codev.com');

    firebase.database().ref('employees').on('value', function(snapshot) {

      dataFirebase = snapshot;
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        // alert('image: ' + childData.image + "\n is_login: " + childData.is_login
        // + "\n jobtitle: " + childData.jobtitle
        // + "\n name: " + childData.name);
        // console.log('image: ' + childData.image + " is_login: " + childData.is_login
        // + " jobtitle: " + childData.jobtitle
        // + " name: " + childData.name);

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