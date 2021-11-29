const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    return response.status(200).json({
        data: 'Hello world - test'
    })
});

exports.sendPushNotification = functions.https.onRequest((req, res) => {
    const fcmToken = req.body.token
    const message = req.body.message
    const payload = {
        token: fcmToken,
        notification: {
            title: 'LikeQ',
            body: message
        },
        data: {
            body: message,
        }
    };
    admin.messaging().send(payload)
    return response.status(200).json({
        data: 'Hello from Firebase cloud messaging!'
    })
});