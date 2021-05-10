const express = require('express');
const router = express.Router();
const passport = require('passport');
const tasksApi = require('../../../controllers/api/v1/tasks_api');

router.get('/', passport.authenticate('jwt', {session: false}), tasksApi.getTodo);
router.post('/add-task', passport.authenticate('jwt', {session: false}), tasksApi.addTask);

module.exports = router;