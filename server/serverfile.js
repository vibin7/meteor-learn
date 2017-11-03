Meteor.publish("getMeSettings", function() {
    return Settings.find();
})

Meteor.publish("getMeMukku",function(){
	return Mukku.find();
})

Meteor.methods({
	'delMethod': function(id){
		Mukku.remove(id);
	}

})
Meteor.methods({
	'addMethod': function(obj){
		Mukku.insert(obj);
	}

})
Meteor.methods({
    'updateDocs' : function(obj){
        Mukku.update( {_id : obj._id}, { $set : {name : obj.new}});
    }
})



