const express = require('express');
const router = express.Router();
//import home_controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.post('/add-task', homeController.addTask);
router.post('/delete-tasks', homeController.deleteTask);


module.exports = router;