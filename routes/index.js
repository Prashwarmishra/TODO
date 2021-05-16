const express = require('express');
const router = express.Router();

//import home_controller
const homeController = require('../controllers/home_controller');

//router handling home page
router.get('/', homeController.home);

//router to add a task
router.post('/add-task', homeController.addTask);

//router to delete a task
router.post('/delete-tasks', homeController.deleteTask);

//router to api
router.use('/api', require('./api'));

module.exports = router;