var mongoose = require('mongoose');

var SerieSchema = mongoose.Schema({
    titulo: String,
    genero: String,
    trailerURL: String
});

module.exports = mongoose.mode('Serie', SerieSchema);