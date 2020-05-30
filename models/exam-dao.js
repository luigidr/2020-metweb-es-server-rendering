'use strict';

const db = require('../db.js');

exports.getAllCourses = function() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM course';
    db.all(sql, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      const courses = rows.map((e) => ({code: e.code, name: e.name, credits: e.CFU}));
      resolve(courses);
    });
  });
};

exports.getAllExams = function(id) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT course_code, score, date, name, id, user_id FROM exam, course WHERE course_code=code AND user_id=?';

    // execute the query and get all the results into 'rows'
    db.all(sql, [id], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      // transform 'rows' (query results) into an array of objects
      const exams = rows.map((e) => (
        {
          code: e.course_code,
          score: e.score,
          date: e.date,
          name: e.name,
          id: e.id,
        }
      ));
      resolve(exams);
    });
  });
};