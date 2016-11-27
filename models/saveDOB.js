const db = require('./../lib/dbConnect');

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
  saveDOB
}
