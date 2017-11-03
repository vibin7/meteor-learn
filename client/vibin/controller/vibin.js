angular.module('app').directive('vibin', function() {
    return {
      'templateUrl': 'client/vibin/views/welcome.html',
      'controller': Vctrl
    };
  })

 function Vctrl($scope, $reactive, $state) {
    $reactive(this).attach($scope);
    let self = this;
    $scope.item;
    $scope.saveItem = function(){
      let obj = {
        name: $scope.item
      }
      console.log($scope.item);
      Meteor.call("insertDocs", obj, function(err, res){
        if(err){
            console.log(err);
        }
        else{
          console.log("success");
        }
      })
    }

    this.subscribe('getMeSettings')
    this.subscribe("getData");
    
    $scope.updateItem = function(id){ 
      var newValue = prompt("Enter your new value", id);
      let obj = {
        _id : id,
        new : newValue
      }
      Meteor.call("updateDocs",obj, function(err, suc){
        if(err){
            console.log(err);
        }
        else{
          console.log("update success");
        }
      })
    }
    Meteor.autorun(function() {
      console.log(Content.find().fetch());
      $scope.display = Content.find().fetch();
  }) 
    $scope.deleteItem = function(it){
      console.log(it);
      Meteor.call("deleteDocs", it, function(err, res){
          if(err){
              console.log(err);
          }
          else{
              console.log("delete success");
          }
      }) 
     
    }
    
  }
