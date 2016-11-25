const router = require('express').Router();
const { getUserProfile } = require('./../models/userData');
const { textSearch } = require('./../services/googleSearch');

const sendResponse = (req, res) => res.json(res.data);

router.route('/getUserData')
  .get(getUserProfile, sendResponse)

router.route('/googleSearch')
  .get(textSearch, sendResponse)







module.exports = router;
