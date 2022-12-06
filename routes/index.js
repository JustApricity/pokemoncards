var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController')

/* GET home page. */
router.get('/', cardController.viewAll);
router.get('/edit/:id', cardController.renderEditForm);
module.exports = router;
