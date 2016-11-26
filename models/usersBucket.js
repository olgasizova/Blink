const db = require('./../lib/dbConnect');

function getAllActivities(req, res, next) {
  db.any('SELECT * from events WHERE session_id = $1')
    .then((activities) => {
      res.activities = activities;
      next();
    })
    .catch(error => next(error));
}

function addActivity(req, res, next) {
  db.none(`INSERT INTO events (name, formatted_address, rating, icon) VALUES ($1, $2, $3, $4)`, [req.body.name, req.body.formatted_address])
    .then(next())
    .catch(err => next(err));
}

function deleteEvent(req, res, next) {
  db.none(`DELETE FROM events WHERE event_id = $1 AND session_id = $2;`, [req.params.event_id, req.params.session_id])
    .then(next())
    .catch(err => next(err));
}

module.exports={
  //export models here
}
