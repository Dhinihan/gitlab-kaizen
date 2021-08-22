import express from 'express'
var router = express.Router()

// define the home page route
router.get('', function (req, res) {
  res.send({ ack: new Date().getTime() })
})

export default router
