var mongoose=require("mongoose");

var contactSchema = mongoose.Schema({
name :{
	type: String,
	required: true
	},
	email:{
		type:String,
		required: true
	},
	mobile:{
		type:String,
		required: true
	}
});

var contact= module.exports = mongoose.model("contact",contactSchema);

module.exports.getContacts = function(callback){
	contact.find(callback)
}


module.exports.addContact=function(contact,callback){
	var ctc=new Contact(contact);
	ctc.create(contact,callback);
}

module.exports.getContactById = function(id,callback){
	var query={_id,id};
	contact.findById(query,callback)
}

module.exports.updateContact=function(id,contact,callback){
	contact.update({_id:id}, {
		$set:{name:contact.name,
			  email:contact.email,
			  mobile:contact.mobile}},callback)
}

module.exports.deleteContact=function(id,callback){
	contact.remove({_id:id},callback)
}