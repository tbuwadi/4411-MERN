const mongoose = require('mongoose');
const URI = require('../config/index');

//connect to database
mongoose.connect(URI);
mongoose.connection.on('connected', () => {console.log('Connected to database');});
mongoose.connection.on('error', err => {
	console.log(err);
});
