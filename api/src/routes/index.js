const express = require('express')
const cowRoutes = require('./cow.routes')

const router = express.Router();

router.use('/cows', cowRoutes);


module.exports = router;