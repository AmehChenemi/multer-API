const express = require('express')
const router = express.Router()
const upload = require('../utilities/multer.js')

const {signUp} = require('../controller/controller.js')

router.post('/signup-fam', upload, signUp);

module.exports = router