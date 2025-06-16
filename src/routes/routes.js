const express = require("express");
const {a} = require('../controller/userController')
const router = express.Router();



router.get('/test',a)


module.exports = router;