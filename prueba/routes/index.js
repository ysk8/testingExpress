var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Te Llevo', fecha: 10 });
});

module.exports = router;
