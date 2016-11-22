const router = require('express').Router();

const session = require('express-session');
const google = require('googleapis');
const plus = google.plus('v1');
const OAuth2 = google.auth.OAuth2;

function getOAuthClient (clientId, clientSecret) {
    return new OAuth2(clientId, clientSecret, 'http://localhost:3001/logged/');
}

const getUserData = (req, res) => {
    var oauth2Client = getOAuthClient();
    oauth2Client.setCredentials(req.session["tokens"]);

    var p = new Promise(function (resolve, reject) {
        plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, response) {
            resolve(response || err);
        })
    }).then(function (data) {
        console.log('homeRoute Hit');
        console.log(data);
    })
}

router.route('/')
  .get(getUserData)



module.exports = router;
