const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    console.log('checkSession');
    console.log(req.sessionID);
    res.sendStatus(204)
  })

module.exports = router;
