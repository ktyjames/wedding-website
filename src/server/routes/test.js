const router = require('express').Router()
router.get('/test', (req, res) => {
  res.status(200).json({
    data: 'response'
  })
})

module.exports = router

