

angular.module("app").config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            template: '<welcome></welcome>'
        })
        .state('vibin', {
            url: '/vibin',
            template: '<vibin></vibin>'
        })
    $urlRouterProvider.otherwise("/welcome")
})
