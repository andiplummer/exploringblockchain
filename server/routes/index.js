const router = require('express').Router()

router.use('/users', require('./users')) // matches all requests to api/users 
router.use('/recipes', require('./recipes')) // matches all requests to api/recipes 

// 404 handling - ex: no api/sloths route 

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router 