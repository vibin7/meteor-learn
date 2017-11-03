

Meteor.publish('getData',function(){
    return Content.find();
})
Meteor.methods({
    'insertcon' : function(obj) {
        Content.insert(obj);
    },
    'updatecon' : function(newobj) {
        console.log(newobj);
        Content.update({ _id: newobj._id },  {$set : {title: newobj.title}});
    },
    'deletecon': function(id){
        console.log('deleted');
         Content.remove({_id:id});
     }
})
