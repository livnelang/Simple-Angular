/******************************
 *
 * Navigation Bar
 *
 ******************************/
myApp.directive('navigationBar',function($rootScope){
    return {
        restrict: 'E',
        replace: true,
        // controller: 'registrationController',
        templateUrl: 'app/templates/navigation-bar.html',
    };
});