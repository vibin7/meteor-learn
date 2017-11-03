angular.module('app').directive('welcome', function() {
    return {
      'restrict': 'E',
      'templateUrl': 'client/welcome/views/welcome.html',
      'controllerAs': 'ctrl',
      'controller': WelcomeCtrl
    };
  })

  function WelcomeCtrl($scope, $reactive, $state) {
    $reactive(this).attach($scope);
    let self = this; 
    this.subscribe("getMeSettings")
    Meteor.autorun(function() {
        console.log(Settings.find().fetch());
    })
  }