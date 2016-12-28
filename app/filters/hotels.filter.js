myApp.filter('hotelsFilter',['hotelsFactory', function (hotelsFactory) {

    return function (hotels, searchText) {
        if (searchText == undefined) return hotels;

        var output = [];

        if(hotelsFactory.name_filter) {

            angular.forEach(hotels, function(hotel) {
                if( hotel.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 ) {
                    output.push(hotel);
                }
            });
        }
        else {
            angular.forEach(hotels, function(hotel) {
                if( hotel.details.brand.txt.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 ) {
                    output.push(hotel);
                }
            });
        }
        return output;
    }
}]);