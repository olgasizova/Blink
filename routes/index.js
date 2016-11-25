const router = require('express').Router();
const express = require('express');
const path = require('path')

router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '/../Blink/public/landing.html'))
  })

module.exports = router;
