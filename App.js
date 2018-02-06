import React from "react";
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

  // componentDidMount() {
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
  // }

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