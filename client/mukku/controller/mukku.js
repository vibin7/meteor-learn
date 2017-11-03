angular.module('app').directive('mukku', function() {
    return {
      'templateUrl': 'client/mukku/views/mukku.html',
      'controller': DisplayCtrl
    };

   
  })

  function DisplayCtrl($scope, $reactive, $state) {
    $reactive(this).attach($scope);
    let self = this; 
    this.subscribe("getMeMukku")

    Meteor.autorun(function() {
        console.log(Mukku.find().fetch());
        $scope.displayang = Mukku.find().fetch();
    })
    $scope.name;
    $scope.addMethod= function(){
      console.log($scope.name);
      let obj={
        name: $scope.name
      }
      Meteor.call('addMethod',obj,function(err,res){
        if (err)
        {
          console.log(err);
        }
        else
        {
          console.log(success);
        }
      })
      Meteor.autorun(function() {
        
       console.log(Mukku.find().fetch());
        $scope.displayang = Mukku.find().fetch();
      })
    }
    $scope.delete=function(id){
      console.log($scope.name);
      Meteor.call('delMethod',id,function(err,res){
        if (err)
        {
          console.log(err);
        }
        else
        {
          console.log(success);
        }
      })
    }

    $scope.updateItem = function(id){
      var newValue = prompt("Enter your new value");
      let obj = {
        _id : id,
        new : newValue
      }
      Meteor.call("updateDocs",obj, function(err,res){
        if(err){
            console.log(err);
        }
        else{
          console.log("update success");
        }
      })
      Meteor.autorun(function() {
        
       console.log(Mukku.find().fetch());
        $scope.displayang = Mukku.find().fetch();
    })
    }
    Meteor.autorun(function() {
      
     console.log(Mukku.find().fetch());
      $scope.displayang = Mukku.find().fetch();
    })}
