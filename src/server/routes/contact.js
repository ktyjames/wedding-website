import express from 'express'
import * as controller from '../controllers/contact'

const router = express.Router()

router.post('/contact', controller.postMessage)

module.exports = router