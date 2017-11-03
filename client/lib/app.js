// Meteor._reload.onMigrate(function() {
//   return [false];
// });
let modulesToLoad =  [
    'angular-meteor',
    'ui.router',
    'ngMaterial',
    'ngAnimate',
    'angular-meteor.auth'
  ]
  angular.module('app', modulesToLoad)
  
  // https://github.com/sroze/ngInfiniteScroll/blob/master/src/infinite-scroll.js
  // throttle for infinite-scroll
  
  angular.module("app").config(($mdThemingProvider) => {
  
    var Repoto = $mdThemingProvider.extendPalette('blue', {
      '300': 'e57373',
      '500': '1a237e',
      '600': 'e53935',
      '800': 'c62828',
      '900': 'b71c1c',
      'A100': 'ff8a80',
  
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                          // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
       '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    })
  
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('Repoto', Repoto)
  
    var background = $mdThemingProvider.extendPalette('grey', {
    'A100': 'f2f2f2'
    });
    $mdThemingProvider.definePalette('background', background);
  
  
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('Repoto')
  })
  
  angular.module("app").config(($mdThemingProvider) => {
    // Register the themes to prevent warnings
    $mdThemingProvider.theme('success-toast')
    $mdThemingProvider.theme('error-toast')
  });
  
  function onReady() {
    angular.bootstrap(document, ['app'], {
      strictDi: true
    })
  }

  angular.module("app").controller('AppCtrl',
  function($scope, $mdSidenav, $reactive, $state, $location, $mdDialog, $meteor, $mdToast){

  $reactive(this).attach($scope)
  let self = this

   $scope.$on('$locationChangeSuccess', function() {
        $scope.actualLocation = $location.path();
    });

   $scope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
        if($scope.actualLocation === newLocation) {
            $mdDialog.hide()
        }
    });

  Meteor.autorun(function () {
    let connectionStatus = Meteor.status().connected;
    if(connectionStatus) {
      let mdtObj = $mdToast.simple().textContent('Established connection with server');
      mdtObj.theme("success-toast")
      $mdToast.show(mdtObj);
    } else {
      let mdtObj = $mdToast.simple().textContent('Unable to connect to server!');
      mdtObj.theme("error-toast")
      mdtObj.hideDelay(0);
      $mdToast.show(mdtObj);
    }
  })
});