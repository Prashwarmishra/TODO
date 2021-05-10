const express = require('express');
const router = express.Router();
const passport = require('passport');
const tasksApi = require('../../../controllers/api/v1/tasks_api');

router.get('/', passport.authenticate('jwt', {session: false}), tasksApi.getTodo);
router.post('/add-task', passport.authenticate('jwt', {session: false}), tasksApi.addTask);
router.post('/update-task/:id', passport.authenticate('jwt', {session: false}), tasksApi.updateTask);
router.delete('/delete-task/:id', passport.authenticate('jwt', {session: false}), tasksApi.deleteTask);

module.exports = router;