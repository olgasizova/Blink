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
function saveDOB(req, res, next) {
  db.none(`UPDATE users SET gender = $1, bday = $2, age = $3
          WHERE session_id = $4;`, [req.body.userGender, req.body.userDOB, req.body.userAge, req.sessionID])
          .then(() => {
            console.log('dob updated');
            next()
          })
          .catch((err) => {
            console.log(`--> error saveDOB: ${err}`);
          })
}

module.exports = {
  getUserProfile,
  getAllUsers,
  saveDOB
}
