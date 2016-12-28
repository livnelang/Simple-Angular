myApp.controller('recentController',['$scope', 'hotelsFactory', function ($scope, hotelsFactory) {
    $scope.records = hotelsFactory.records;
}]);