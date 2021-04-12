const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	item: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	}
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
