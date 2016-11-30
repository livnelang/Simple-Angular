var myApp = angular.module("myApp",['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            // controller: 'registrationController'
        })
        // .state('register', {
        //     url: '/register',
        //     templateUrl: 'views/register.html',
        //     controller: 'registrationController'
        // })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: ''
        })
});