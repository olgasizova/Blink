const db = require('./../lib/dbConnect');

function getUserProfile(req, res, next) {
  db.one(`SELECT id, bday FROM user_profiles WHERE session_id = $1;`, [req.sessionID])
  .then((data) => {
    res.data = {
      userProfile: data
    }
    next()
  })
  .catch((err) => {
    console.log(`---> Error getUserProfile: ${err}`);
  })
}
module.exports = {
  getUserProfile
}
