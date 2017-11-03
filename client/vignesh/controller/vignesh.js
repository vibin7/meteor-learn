angular.module('app').directive('vignesh', function() {
    return {
      'templateUrl': 'client/vignesh/views/vignesh.html',
      'controller': Vctrl
    }; 
  })

  function Vctrl($scope, $reactive, $state) {
    $reactive(this).attach($scope);
    let self = this; 
    this.subscribe("getData")
  Meteor.autorun(function() {
    console.log("dependency changed")
    $scope.displaycon = Content.find().fetch();
})
    $scope.savefirstcon =function(){
        if($scope.firstcon == ""){
          alert("Values are empty please enter the value to be stored")
        }else{
          console.log($scope.firstcon)
          Meteor.call("insertcon", {title: $scope.firstcon}, function(err, res) {
            if(err) {
              console(err)
            }else {
              console.log("success")
      
            }
          })
        }  
  }
  $scope.updatecon = function(id){
        let updatedValue = prompt('please enter the change value')
          console.log(updatedValue)
        let newobj = {
           _id : id,
            title : updatedValue
          } 
          console.log(newobj)
  Meteor.call('updatecon',newobj,function(err,res){
      if(updatedValue == ""){
        alert('please enter some value')
      }else{
        console.log('inside update call')
      if(err){
          console.log(err);
      }else{
          alert("Successfully Updated");
         
      }
    }
  });
}
  $scope.deletecon = function(id){
    console.log(id);
  Meteor.call('deletecon',id,function(err,res){
    if(err){
      console.log(err);
    }else{
      alert('Successfully Deleted')
    }
  })
  }


}


  