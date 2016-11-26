const db = require('./../lib/dbConnect');

function getUserProfile(req, res, next) {
  db.one(`SELECT * FROM users WHERE session_id = $1;`, [req.sessionID])
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

function getAllUsers(req, res, next) {
  db.query(`SELECT * FROM users`)
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
  getUserProfile,
  getAllUsers
}
