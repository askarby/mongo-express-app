var express = require('express');

module.exports = function (db) {    
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });

    return router;
};
