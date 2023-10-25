const express = require('express');
const router = express.Router();

homeCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', homeCtrl.index)

module.exports = router;
