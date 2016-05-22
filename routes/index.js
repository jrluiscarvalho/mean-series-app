var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var Serie = mongoose.model('Serie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/series', function(req, res, next){
    Serie.find(function(err, series){
        if(err)
            return next(err);

        res.json(series);
    });
});

router.post('/series', function(req, res, next){
    var serie = new Serie(req.body);

    if(serie.trailerURL && serie.trailerURL != "")
        serie.trailerURL = serie.trailerURL.replace('watch?v=', 'embed/');

    serie.save(function(err, serie){
        if(err)
            return next(err);
        res.json(serie);
    });
});

router.get('/series/:serie_id', function(req, res, next){
    var query = Serie.findById(req.params.serie_id);

    query.exec(function(err, serie){
        if(err)
            return next(err);
        if(!serie)
            return next(new Error("It's Not Possible find the Series"));

        res.json(serie);

    });
});

router.delete('/series/:serie_id', function(req, res, next){
    var query = Serie.findById(req.params.serie_id);

    query.remove(function(err, serie){
        if(err)
            return next(err);

        resp.json({message: 'deleted with success'});
    });
});

router.put('series/:serie_id', function(req, res, next){
    var query = Serie.findById(req.params.serie_id);

    query.exec(function(err, serie){
        if(err)
            return next(err);

        if(!serie)
            return next(new Error("It's Not Possible find the Series"));

        serie.titulo = req.body.titulo;
        serie.genero = req.body.genero;
        serie.trailerURL = req.body.trailerURL.replace('watch?v=', 'embed/');
        serie.save();

        res.json({message: 'updated with success'});

    });
});

module.exports = router;
