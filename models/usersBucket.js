const db = require('./../lib/dbConnect');

function getAllActivities(req, res, next) {
  /*select all from events table where current
  session id matches session id associated with events */
  db.any('SELECT * from events WHERE session_id = $1')
    .then((activities) => {
      res.activities = activities;
      next();
    })
    .catch(error => next(error));
}

function addToBucket(req, res, next) {
  db.one(`SELECT * FROM events
          WHERE user_id = $/user_id/
            AND place_id = $/place_id/;`, req.body)
    .then(() => {
      console.log('Duplicate event, not adding');
      next()
    })
    .catch((err) => {
      console.log('--> No event found, adding event');
      db.none(`INSERT INTO events (user_id, name, icon, rating, formatted_address, place_img, place_id, status)
              VALUES ($/user_id/, $/name/, $/icon/, $/rating/, $/formatted_address/, $/place_img/, $/place_id/, $/status/);`, req.body)
        .then(() => next())
        .catch((err) => {
          console.log(`--> addToBucket error: ${err}`);
        })
    })
}
function getBucketPending(req, res, next) {
  db.query(`SELECT events.* FROM users
          INNER JOIN events
          ON(users.id = events.user_id)
          WHERE users.session_id = $/sessionID/;`, req)
    .then((data) => {
      res.data = {
        pending: [data],
        completed: 'none'
      }
      next()
    })
    .catch((err) => {
      console.log(`--> getBucketPending error: ${err}`);
    })
}
function getBucketCompleted(req, res, next) {
  db.query(`SELECT events.* FROM users
            INNER JOIN events
            ON(users.id = events.user_id)
            WHERE users.session_id = $/sessionID/
            AND events.status = 'completed';`, req)
    .then((data) => {
      res.data.completed = [data];
      next()
    })
    .catch((err) => {
      console.log(`--> getBucketCompleted error ${err}`);
    })
}
function deleteActivity(req, res, next) {
  // delete activity from event where session id attatched to event id lives
  db.none(`DELETE FROM events WHERE event_id = $1 AND session_id = $2;`, [req.params.event_id, req.params.session_id])
    .then(next())
    .catch(err => next(err));
}

module.exports={
  addToBucket,
  getBucketPending,
  getBucketCompleted
}
