const express = require('express');
const router = express.Router();
const property = require('./property/property');

router.get('/', function apiTest(req, res) {
	console.log('API is working');
	res.send('API is working');
});

router.get('/property/getData', property.getProperty);

module.exports = router;
