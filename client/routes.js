angular.module("app").config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            template: '<welcome></welcome>'
        })
         .state('vignesh', {
        url: '/vignesh',
        template: '<vignesh></vignesh>'
         })
    $urlRouterProvider.otherwise("/welcome")
})