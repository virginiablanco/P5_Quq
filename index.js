var express = require('express');
var router = express.Router();
const sequelize = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/credits', function(req, res, next) {
    res.render('credits', { title: 'Créditos' });
});
router.get('/quizzes', function(req, res, next) {
  sequelize.models.quiz.findAll()
      .then(quizzes=>{
          res.render('quizzes', { quizzes });
      });

});


module.exports = router;
