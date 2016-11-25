const router = require('express').Router();
const { getUserProfile } = require('./../models/userData');

const sendResponse = (req, res) => res.json(res.data);

router.route('/getUserData')
  .get(getUserProfile, sendResponse)

module.exports = router;
