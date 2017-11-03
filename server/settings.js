Meteor.publish("getMeSettings", function() {
    return Settings.find();
})

Meteor.publish('getData',function(){
    return Content.find();
})
Meteor.methods({
    'insertDocs' : function(obj) {
        Content.insert(obj);
    }
});
Meteor.methods({
    'deleteDocs' : function(id){
        Content.remove(id); 
    }
})
Meteor.methods({
    'updateDocs' : function(obj){
        Content.update( {_id : obj._id}, { $set : {name : obj.new}});
    }
})