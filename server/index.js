require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT || 3004;

app.use(
	cors({
		origin: [
			,
			'http://127.0.0.1:3000',
			'https://127.0.0.1:3000',
			'http://localhost:3000',
			'https://localhost:3000',
		],
		methods: ['GET', 'POST'],
		credentials: false,
	})
);

app.use(express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.use('/api', require('./controllers/app'));

// app.use((req, res) => {
// 	res.status(404).json({ error: 'Not found' });
// });

async function start() {
	try {
		await app.listen(PORT, HOST);
		console.log(`Server running at http://${HOST}:${PORT}/`);
	} catch (error) {
		console.log('Server error: ' + error.message);
	}
}

start();
