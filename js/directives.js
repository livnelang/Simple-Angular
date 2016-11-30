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
        templateUrl: 'templates/navigation-bar.html',
        // compile: function(tElem,attrs) {
        //     return function(scope,elem,attrs) {
        //         // console.log('hey');
        //         // console.log($rootScope.currentUser );
        //     };
        // }
    };
});