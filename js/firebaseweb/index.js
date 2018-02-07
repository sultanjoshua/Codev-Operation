// This is the Firebase Function code and is not part of the mobile app.
// This is used for FCM which has to be deployed on firebase service.
// Please follow instructions in Firebase Functions.

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

exports.sendMessage = functions.database.ref('employees/{employeeId}').onUpdate(event =>{
    console.log("event.data.val()" + JSON.stringify(event.data.val()));

    console.log("event.params.employeeId" + event.params.employeeId);

    var affectedObj = event.data.val();

    console.log("affectedObj" + JSON.stringify(affectedObj));

    admin.database().ref('logins').once("value", event => {
        // console.log("event.val()" + event.val());

        var token = event.val().token

        // This registration token comes from the client FCM SDKs.
        var registrationToken = token;

        var payload =   { 
                            "notification": 
                                {
                                    "title": "Clock " + affectedObj.clockin_status,
                                    "body": affectedObj.name,
                                    "click_action" : "Ok"
                                }
                        }

        // Send a message to the device corresponding to the provided
        // registration token.
        admin.messaging().sendToDevice(registrationToken, payload)
            .then(function(response) {
                // See the MessagingDevicesResponse reference documentation for
                // the contents of response.
                console.log("Successfully sent message:", response);
                return true;
            })
            .catch(function(error) {
                console.log("Error sending message:", error);
            });
    });
    
});