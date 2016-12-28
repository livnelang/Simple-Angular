myApp.controller('hotelEditController',['$scope', 'hotelsFactory','$stateParams','ngDialog','$location', function ($scope, hotelsFactory, $stateParams, ngDialog, $location) {
    $scope.amenities = "";
    hotelsFactory.getHotel($stateParams.id).then(function(data) {
        $scope.hotel = angular.copy(data);
    });

    /**
     * saveChanges function,
     * validate first with pop model,
     * afterwards, saves changes for local factory
     */
    $scope.saveChanges = function () {

        ngDialog.openConfirm({
            template:'\
                <h2>Save Record Changes ?</h2>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>\
                </div>',
            plain: true
        }).then(function (success) {
            //todo, save
            for(var i in hotelsFactory.hotels) {
                if(hotelsFactory.hotels[i]['_id'] == $scope.hotel['_id']) {
                    hotelsFactory.hotels[i] = $scope.hotel;
                    break;
                }
            }

        }, function (error) {
        });
    }

    /**
     * deleteHotel function,
     * deletes presented hotel,
     * afterwards, saves changes for local factory
     */
    $scope.deleteHotel = function () {

        ngDialog.openConfirm({
            template:'\
                <h2>Are you sure about remove the record ?</h2>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>\
                </div>',
            plain: true
        }).then(function (success) {
            //todo, save
            for(var i in hotelsFactory.hotels) {
                if(hotelsFactory.hotels[i]['_id'] == $scope.hotel['_id']) {
                    //todo, splice from factory array
                    hotelsFactory.hotels.splice(i, 1);
                    break;
                }
            }
            $location.path("/hotels");

        }, function (error) {
        });
    }
    
}]);