const express = require("express");
const { CreateUser } = require('../controller/userController');
const router = express.Router();

// POST route to create a user
router.post('/CreateUser', CreateUser);



module.exports = router;
