const db = require('./../lib/dbConnect');

function getUserProfile(req, res, next) {
  db.one(`SELECT id, bday, profile_img FROM user_profiles WHERE session_id = $1;`, [req.sessionID])
  .then((data) => {
    res.data = {
      userProfile: data
    }
    next()
  })
  .catch((err) => {
    res.data = {
      userProfile: {
        id: 'No user signed in',
        bday: undefined
      }
    }
    console.log(`---> Error getUserProfile: ${err}`);
    next();
  })
}
module.exports = {
  getUserProfile
}
