const express = require('express');
const router = express.Router();

router.get('/', function apiTest(req, res) {
	console.log('API is working');
	res.send('API is working');
});

module.exports = router;
