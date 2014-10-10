var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Te Llevo', 
                         fecha: 10, 
                         autos: ["ABC 589", "FRG 492"],
                         destinos:["Casa 1", "Apto 1", "Hotel 1"],
                         servicio_resumen: []
                        });
});

module.exports = router;
