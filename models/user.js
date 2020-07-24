const mongoose = require('mongoose');

// Genre Schema
const UserSchema =new mongoose.Schema({
    index:{
        type:Number
    },
	name:{
		type: String,
		
    },
    email:{
		type: String,
		
    },
    contact:{
		type: String,
		
    },
	create_date:{
		type: Date,
		default: Date.now
    },
    prod:{
		type: Number,
		
    },
    budget:{
		type:Number,
		
	},
    
});
const User = module.exports = mongoose.model('user', UserSchema);

// Get Genres
module.exports.getUser = (callback, limit) => {
	User.find(callback).limit(limit);
}
module.exports.getUserbyid = (id,callback) => {
	User.findById(id,callback);
}
module.exports.addUser = (user,callback) => {
	User.create(user,callback);
}
module.exports.updateUser = (id,user,options,callback) => {
	var query={_id:id};
    var update={index:user.index};
	User.findOneAndUpdate(query,update,options,callback);
}
module.exports.removeUser = (id,callback) => {
	var query={_id:id};
	User.remove(query,callback);
	
}