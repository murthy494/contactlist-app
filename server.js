var express = require("express");
var app= express();				// inbulid function
var PORT = process.env.PORT || 3000

var mongoose= require("mongoose");
var contact= require("./model/contact")
var bodyParser= require("body-parser");


mongoose.connect("mongodb://localhost/contactlist", function(){
	console.log("sucessfuly connectd with mongoo db")
});
app.use(express.static(__dirname+"/public"))
app.use(bodyParser.json());


//retrieving
app.get("/contactlist",function(req,res){

		contact.getContacts(function(err,data){
			if(err){
				throw err;
				console.log(data);
			}
			res.json(data);
		})
})

//inserting
app.post("/contactlist",function(req,res){
	var body=req.body;
	contact.addContact(body,function(err,data){
		if(err){throw err;}
		res.json(data);
	})
})

//editing
app.get("/contactlist/:id",function(req,res){
	var id=req.params.id;	
	
	contact.getContactById(id,function(err,data){
		if(err){
				throw err;
				console.log(data);
			}
			res.json(data);
	})
})

//update
app.put("/contactlist/:id",function(req,res){
	var id=req.params.id;
	var body=req.body;	
	
	contact.updateContact(id,body,function(err,data){
		if(err){
				throw err;
				console.log(data);
			}
			res.json(data);
	})
})


//delete
app.delete("/contactlist/:id",function(req,res){
	var id=req.params.id;
	
	contact.deleteContact(id,function(err,data){
		if(err){
				throw err;
				console.log(data);
			}
			res.json(data);
	})
})

app.listen(PORT, function(){

	console.log("server is listing at port 3000"+PORT);
})