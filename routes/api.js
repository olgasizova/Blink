const router = require('express').Router();
const { getUserProfile } = require('./../models/userData');
const { getAllUsers } = require('./../models/userData');
const { textSearch } = require('./../services/googleSearch');

const sendResponse = (req, res) => res.json(res.data);
// routes for user login
router.route('/getUserData')
  .get(getUserProfile, sendResponse)

router.route('/getAllUsers')
  .get(getAllUsers, sendResponse)


router.route('/googleSearch')
  .post(textSearch, sendResponse)


//routes for usersBucketItems
router.get('/BucketListItems', (req, res) => {
  res.json(res.bucket || []);
});

router.post('/BucketListItems',(req, res) => {
  res.json({ message: 'Activity has been added to your Bucket List!' });
});

router.delete('/:ActivityID',(req, res) => {
  res.json({ message: 'Activity Successfully Deleted' });
});

module.exports = router;
