const router = require('express').Router()
const {Users} = require('../db/Users')

// matches /api/users 
router.get('/', (req, res, next) => {
  try {
    Users.findAll()
      .then(users => res.json(users))
  } catch (error) {
    next(error)
  }
})

module.exports = router