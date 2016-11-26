const db = require('./../lib/dbConnect');

function createUser(email, sessionId, profile_img, displayName) {
  db.none(`INSERT INTO users (email, session_id, profile_img, name) VALUES($1, $2, $3, $4);`, [email, sessionId, profile_img, displayName])
}

function checkUser(req, res, next) {
  //console.log(res.email_id);
  console.log(res.email);
  db.one(`SELECT * FROM users WHERE email = $/email/;`, res)
  // db.one(`SELECT * FROM users WHERE email = $1;`, [res.email])
    .then(() => {
    db.none(`UPDATE users
              SET session_id = $1, profile_img = $3
            WHERE email = $2;`, [req.sessionID, res.email, res.profile_img])
    .then(() => {
      console.log('updated');
      next()
    })
    .catch((er) => {
      console.log('--> DB update error');
    })
  }).catch((err) => {
     console.log('new user');
     createUser(res.email, req.sessionID, res.profile_img, res.name)
     next()
  })
}
module.exports = {
  checkUser
}
