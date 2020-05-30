'use strict';

const dao = require('../models/exam-dao.js');
const express = require('express');
const router = express.Router();


/* GET course (home) page */
router.get('/', function(req, res, next) {
  dao.getAllCourses()
  .then((courses) => {
    res.render('courses', {title: 'Courses', courses});
  });
});

module.exports = router;
