var mongoose = require('mongoose');

var GuruSchema = new mongoose.Schema({
	nama: String,
	lokasi: String,
	biaya: Number
});

module.exports = mongoose.model('Guru', GuruSchema);