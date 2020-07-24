var express=require("express");
var app=express();
const path=require('path');
var BodyParser=require("body-parser");
const Prod=require('./models/user');
const User=require('./models/prod')
var mongoose=require("mongoose");
const bodyParser = require("body-parser");
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
	mongoose.connection.once('open',function(){
		console.log("connection has been made");
	
	}).on('error',function(error){
		console.log("error:",error);
	});
	
app.get('/',function(req,res){
    res.send("HEAD OVER TO POSTMAN");
});

app.get('/platform/users', (req, res) => {
	User.getUser((err,user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});
app.post('/platform/signup', (req, res) => {
	var user=req.body;
	User.addUser(user,(err, user) => {
		if(err){
			throw err;
		}
        res.json(user);
	});
});
app.get('/platform/login/:_id', (req, res) => {
	User.getUserbyid(req.params._id,(err,user) =>{
		if(err){
			throw err;
		}
        res.json(user);
        
	});

});
app.put('/platform/changePassword/:_id', (req, res) => {
	var id=req.params._id;
	var user=req.body;
	User.updateUser(id,user,{},(err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});
app.delete('/platform/deleteUser/:_id', (req, res) => {
	var id = req.params._id;
	User.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
        res.json(user);
	});
});
app.get('/platform/products', (req, res) => {
	Prod.getUser((err,prod) => {
		if(err){
			throw err;
		}
		res.json(prod);
	});
});
app.post('/platform/product/create', (req, res) => {
	var prod=req.body;
	Prod.addUser(prod,(err, prod) => {
		if(err){
			throw err;
		}
        res.json(prod);
	});
});
app.get('/platform/product/:_id', (req, res) => {
	Prod.getProdbyid(req.params._id,(err,prod) =>{
		if(err){
			throw err;
		}
        res.json(prod);
        
	});

});
/*app.put('/platform/changePassword/:_id', (req, res) => {
	var id=req.params._id;
	var user=req.body;
	User.updateUser(id,user,{},(err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});*/
app.delete('/platform/deleteprod/:_id', (req, res) => {
	var id = req.params._id;
	Prod.removeProd(id, (err, prod) => {
		if(err){
			throw err;
		}
        res.json(prod);
	});
});
app.listen('3000');
console.log("listening on port 3000");