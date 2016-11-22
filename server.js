const express = require('express');
const logger = require('morgan');
require('dotenv');

const session = require('express-session');
const google = require('googleapis');
const gmail = google.gmail('v1');
const clientId = process.env.APP_CLIENT_ID
const clientSecret = process.env.APP_CLIENT_SECRET;

const app = express();

app.use(logger('dev'));


//routing
app.use('/', require('./routes/index.js'))



const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`SERVER IS LISTENING ON ${PORT}`));
