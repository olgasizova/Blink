const db = require('./../lib/dbConnect');

function createUser(email_id, sessionId, profile_img) {
  db.none(`INSERT INTO user_profiles (id, session_id, profile_img) VALUES($1, $2, $3);`, [email_id, sessionId, profile_img])
}

function checkUser(req, res, next) {
  //console.log(res.email_id);
  db.one(`SELECT * FROM user_profiles WHERE id = $1;`, [res.email_id])
    .then(() => {
    db.none(`UPDATE user_profiles
              SET session_id = $1, profile_img = $3
            WHERE id = $2;`, [req.sessionID, res.email_id, res.profile_img])
    .then(() => {
      console.log('updated');
      next()
    })
    .catch((er) => {
      console.log('--> DB update error');
    })
  }).catch((err) => {
     console.log('new user');
     createUser(res.email_id, req.sessionID, res.profile_img)
     next()
  })
}
module.exports = {
  checkUser
}
