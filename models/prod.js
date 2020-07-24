const mongoose = require('mongoose');

// Genre Schema
const ProdSchema =new mongoose.Schema({
    index:{
        type:Number
    },
	name:{
		type: String,
    },
    brand:{
		type: String,
		
    },
    category:{
		type: String,
		
    },
	stock:{
		type: Number
    },
    price:{
		type: Number,
		
    },
    Description:{
		type:String,
		
    },
    rating:{
		type: Number,
		
    },
    reviews:{
		type: Array,
    },
    
});
const Prod = module.exports = mongoose.model('prod', ProdSchema);

// Get Genres
module.exports.getProd = (callback, limit) => {
	Prod.find(callback).limit(limit);
}
module.exports.getProdbyid = (id,callback) => {
	Prod.findById(id,callback);
}
module.exports.addProd = (prod,callback) => {
	Prod.create(prod,callback);
}
module.exports.updateProd = (id,prod,options,callback) => {
	var query={_id:id};
	var update={name:prod.name};
	Prod.findOneAndUpdate(query,update,options,callback);
}
module.exports.removeProd = (id,callback) => {
	var query={_id:id};
	Prod.remove(query,callback);
	
}