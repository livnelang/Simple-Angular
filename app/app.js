var myApp = angular.module("myApp",['ui.router', 'ngRateIt','ngDialog']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise("/hotels");

    $stateProvider
        .state('hotels', {
            url: '/hotels',
            templateUrl: 'app/views/hotels.html',
            controller: 'hotelsController'
        })
        .state('hotel-view', {
            url: '/hotel-view?id',
            templateUrl: 'app/views/hotel-view.html',
            controller: 'hotelViewController'
        })
        .state('hotel-edit', {
            url: '/hotel-edit?id',
            templateUrl: 'app/views/hotel-edit.html',
            controller: 'hotelEditController'
        })
        .state('recently', {
            url: '/recently',
            templateUrl: 'app/views/recently.html',
            controller: 'recentController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/views/about.html',
            controller: ''
        })
});