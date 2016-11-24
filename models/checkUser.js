const db = require('./../lib/dbConnect');

function createUser(email_id, token) {
  db.none(`INSERT INTO blink_user_profiles (email_id, token_id) VALUES($1, $2);`, [email_id, req.sessionID])
}

function checkUser(req, res, next) {
  //console.log(res.email_id);
  db.one(`SELECT * FROM blink_user_profiles WHERE email_id = $1;`, [res.email_id])
    .then(() => {
    db.none(`UPDATE blink_user_profiles
              SET token_id = $1
            WHERE email_id = $2;`, [req.sessionID, res.email_id])
    .then(() => {
      console.log('updated');
      next()
    })
    .catch((er) => {
      console.log('--> DB update error');
    })
  }).catch((err) => {
     console.log('no user');
     createUser(res.email_id, req.sessionID)
     next()
  })
}
module.exports = {
  checkUser
}
