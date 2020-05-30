'use strict';

const dao = require('../models/exam-dao.js');
const express = require('express');
const router = express.Router();

/* GET exams page */
router.get('/', function(req, res, next) {
  dao.getAllExams(req.user.id)
  .then((exams) => res.render('exams', {title: 'Exams', exams }));
});

module.exports = router;
