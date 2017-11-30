import React from "react";
import App from "./js/App";
import firebase from 'react-native-firebase';

export default class App1 extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDajFDLX7j3sdbSvcnGUfbeJnFwfAcGecE",
      authDomain: "zylun-ops-app.firebaseapp.com",
      databaseURL: "https://zylun-ops-app.firebaseio.com",
      projectId: "zylun-ops-app",
      storageBucket: "zylun-ops-app.appspot.com",
      messagingSenderId: "199577270778"
    };
  
    var firebaseApp = firebase.initializeApp(firebaseConfig);

    // firebase.auth().signInAnonymously()
    //   .then((user) => {
    //     console.log(user.isAnonymous);
    //   });
  }

  render() {
    return <App />;
  }
}