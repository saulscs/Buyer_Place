const router = require('express').Router()
const passport = require('../helpers/passport')
const User = require('../models/User')
const { isLogged } = require('../helpers/middlewares')


//signup 
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      passport.authenticate('local', (err, user, info) => {
        if(err) return res.status(500).json(err)
        if(!user) return res.status(401).json({ message: 'No estas registrado, sorry'})
        req.logIn(user, err => {
          if(err) return res.status(401).json(err)
          return res.status(200).json(user)
        })
      })(req, res, next)
    })
    .catch(err => res.status(500).json(err))
})


//login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) return res.status(500).json(err)
    if(!user) return res.status(401).json({ message: 'No estas logeado'})
    req.logIn(user, err => {
      if(err) return res.status(401).json(err)
      return res.status(200).json(user)
    })
  })(req, res, next)
})

//logout
router.get('/logout', (req, res, next) => {
  req.logOut()
  req.session.destroy(err => {
    if(!err) res.status(200)
  })
})

//profile 
router.get('/profile', isLogged, (req, res, next) => {
  req.status(200).json(req.user)
})



module.exports = router