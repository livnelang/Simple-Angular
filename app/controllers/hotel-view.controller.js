myApp.controller('hotelViewController',['$scope', 'hotelsFactory','$stateParams', function ($scope, hotelsFactory, $stateParams) {
    $scope.amenities = "";
    hotelsFactory.getHotel($stateParams.id).then(function(data) {
        $scope.hotel = data;
        $scope.registerVisit();
        $scope.concatAmenities();
    });

    /**
     * concatAmenities Function, used to concat & stringify
     * all the amenities and assign to one scope variable
     */
    $scope.concatAmenities = function () {
        for(var i =1; i<$scope.hotel.amenities.length-1;i++) {
            $scope.amenities += "" + $scope.hotel.amenities[i].txt + ", ";
        }
        $scope.amenities += "" + $scope.hotel.amenities[0].txt;
    };

    /**
     * registerVisit Function, 
     * uses us to save the visited hotels
     */
    $scope.registerVisit = function() {
        hotelsFactory.records.push({name: $scope.hotel.name, date: new Date().toString()})
    }
}]);