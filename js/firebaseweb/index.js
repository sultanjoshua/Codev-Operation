const admin = require('firebase-admin');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.database.ref('employees/{employeeId}').onUpdate(event =>{
    var affectedObj = event.data.val();
    admin.database().ref('logins').once("value", event => {
        var token = event.val().token
        var registrationToken = token;

        var payload =   { 
                            "notification":
                                {
                                    "title": "Clock " + affectedObj.clockin_status,
                                    "body": "Employee: " + affectedObj.name + " Contact Number:" + affectedObj.contactNumber,
                                    "click_action" : "Action",
                                }
                        }

        // Send a message to the device corresponding to the provided
        // registration token.
        admin.messaging().sendToDevice(registrationToken, payload)
            .then(response => {
                // See the MessagingDevicesResponse reference documentation for
                // the contents of response.
                console.log("Successfully sent message:", response);
                return true;
            })
            .catch(error => {
                console.log("Error sending message:", error);
            });
    });
});