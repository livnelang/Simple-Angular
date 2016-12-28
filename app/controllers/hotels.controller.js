myApp.controller('hotelsController',['$scope', 'hotelsFactory','ngDialog', function ($scope, hotelsFactory, ngDialog) {
    $scope.hotels_list = true; // flag for showing hotels list
    $scope.search_holder = { 0: "Search By Hotel Name", 1: "Search By Brand Name" };
    $scope.search_holder.current = $scope.search_holder[0];

    

    // initially sets our hotels updated list
    hotelsFactory.getData().then(function(){
        $scope.hotels = hotelsFactory.hotels;
    });
    // retrieve brands as well
    hotelsFactory.getBrands().then(function(){
        $scope.brands = hotelsFactory.brands;
    });


    /**
     * changeFilter function, toggles between brands/hotels features,
     * used to make initially dynamic filter purpose
     */
    $scope.changeFilter = function(view_condition) {
        // if the same view clicked, and equaled
        if($scope.hotels_list == view_condition) {
            return;
        }
        $scope.hotels_list = view_condition;
        // sets which type will be filtered by
        hotelsFactory.name_filter = !hotelsFactory.name_filter;
        // ternary condition for setting the placeholder search
        !view_condition ? $scope.search_holder.current = $scope.search_holder[1] :
        $scope.search_holder.current = $scope.search_holder[0]

    };

    /**
     * deleteApproved function - used to splice selected hotel from factory,
     * and reassign the list to the view (controller)
     */
    $scope.deleteApproved = function(hotel) {

        ngDialog.openConfirm({
            template:'\
                <h2>Remove Record ?</h2>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog(0)">No</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="confirm(1)">Yes</button>\
                </div>',
            plain: true
        }).then(function (success) {
            for(var h in hotelsFactory.hotels) {
                if(hotelsFactory.hotels[h].name == hotel) {
                    hotelsFactory.hotels.splice(h, 1);
                    $scope.hotels = hotelsFactory.hotels;
                    break;
                }
            }
        }, function (error) {
        });

    }

}]);