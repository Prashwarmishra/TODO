const express = require('express');
const router = express.Router();

//router to users
router.use('/users', require('./users'));

module.exports = router;