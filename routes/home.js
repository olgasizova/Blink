const router = require('express').Router();

const session = require('express-session');
const google = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const google2 = require('googleapis').oauth2("v2");

const {checkUser} = require('./../models/checkUser');


function getOAuthClient (clientId, clientSecret) {
    return new OAuth2(clientId, clientSecret, 'http://localhost:3001/logged/');
}

const getUserData = (req, res, next) => {
    var oauth2Client = getOAuthClient();
    oauth2Client.setCredentials(req.session["tokens"]);

    var p = new Promise(function (resolve, reject) {
        // console.log(req.session.tokens.id_token);
        google2.userinfo.v2.me.get({auth: oauth2Client }, function(err, response) {
            resolve(response || err);
        })
    }).then(function (data) {
        console.log('homeRoute Hit');
        console.log(data);
        res.email_id = data.email;
        next()
    })
}

router.route('/')
  .get(getUserData, checkUser)



module.exports = router;
