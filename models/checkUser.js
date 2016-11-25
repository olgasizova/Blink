const db = require('./../lib/dbConnect');

function createUser(email_id, sessionId) {
  db.none(`INSERT INTO user_profiles (id, session_id) VALUES($1, $2);`, [email_id, sessionId])
}

function checkUser(req, res, next) {
  //console.log(res.email_id);
  db.one(`SELECT * FROM user_profiles WHERE id = $1;`, [res.email_id])
    .then(() => {
    db.none(`UPDATE user_profiles
              SET session_id = $1
            WHERE id = $2;`, [req.sessionID, res.email_id])
    .then(() => {
      console.log('updated');
      next()
    })
    .catch((er) => {
      console.log('--> DB update error');
    })
  }).catch((err) => {
     console.log('new user');
     createUser(res.email_id, req.sessionID)
     next()
  })
}
module.exports = {
  checkUser
}
