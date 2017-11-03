

angular.module("app").config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            template: '<welcome></welcome>'
        })
        .state('mukku', {
            url: '/mukku',
            template: '<mukku></mukku>'
        })
    $urlRouterProvider.otherwise("/welcome")
 })