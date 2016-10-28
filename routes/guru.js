var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Guru = require('../models/Guru.js');

//fungsi GET
router.get('/', function(req, res, next){
	Guru.find(function(err, guru){
		if(err) return next(err);
		res.json(guru);
	});
});

//fungsi POST
router.post('/', function(req, res, next){
	Guru.create(req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

//fungsi get /guru/id
router.get('/:id', function(req, res, next){
	Guru.findById(req.params.id, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

//fungsi PUT /guru/id
router.put('/:id', function(req, res, next){
	Guru.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

//fungsi DELETE /guru/id
router.delete('/:id', function(req, res, next){
	Guru.findByIdAndRemove(req.params.id, req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

module.exports = router;