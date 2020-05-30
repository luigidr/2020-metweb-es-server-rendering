'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');

// Login page
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* Do the login */
router.post('/sessions', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
        // display wrong login messages
        return res.render('login', {'message': info.message});
    }
    // success, perform the login
    req.login(user, function(err) {
      if (err) { return next(err); }
      // req.user contains the authenticated user
      res.redirect('/');
    });
  })(req, res, next);
});

router.delete('/sessions/current', function(req, res, next) {
  req.logout();
  res.end();
});

module.exports = router;
