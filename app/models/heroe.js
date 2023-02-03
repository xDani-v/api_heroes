var mongose = require('mongoose');
var schema = mongose.Schema;
var heroeSchema = schema({
    nombre: String,
    bio: String,
    img: String,
    aparicion: Date,
    casa: String
});

module.exports = mongose.model('heroe', heroeSchema);