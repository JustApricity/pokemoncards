var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController')

/* GET home page. */
router.get('/', cardController.viewAll);

module.exports = router;
