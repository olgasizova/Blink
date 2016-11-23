const db = require('./../lib/dbConnect');

function createUser(email_id, token) {
  db.none(`INSERT INTO users (email_id, token_id, bday) VALUES($1, $2, '01-01-2001');`, [email_id, token])
}

function checkUser(req, res, next) {
  //console.log(res.email_id);
  db.one(`SELECT * FROM users WHERE email_id = $1;`, [res.email_id])
  .then((data) => {
    const userObj = {email_id: data.email_id, token_id: data.token_id, bday: data.bday}
    res.user = userObj;
    console.log(res.user);
    next()
    //console.log(data);
  // }).catch((err) => {
  //   console.log('no user');
  //   createUser(res.email_id, req.session.tokens.id_token)
  //   next()
  })
}
module.exports = {
  checkUser
}
