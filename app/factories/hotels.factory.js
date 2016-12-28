myApp.factory('hotelsFactory',['$http', '$q', function($http, $q) {
    var _hotelsFactory = {};
    _hotelsFactory.name_filter = true;
    _hotelsFactory.records = [];


    /**
     * getData Function,
     * gets our initial data, and cache it into factory obj.
     */
    _hotelsFactory.getData = function() {
        var deffered = $q.defer();
        if(_hotelsFactory.hotels != null) {
            deffered.resolve();
        }
        else {
            $http.get('app/data/hotels.json').then(function(res) {
                _hotelsFactory.hotels = res.data;
                deffered.resolve();
            }).
            catch(function onError(err) {
                // Handle error
                console.log(err);
            });
        }
        return deffered.promise;
    };


    /**
     * getBrands Function,
     * gets our initial brands, and cache it into factory obj.
     */
    _hotelsFactory.getBrands = function() {
        var deffered = $q.defer();
        if(_hotelsFactory.hotels != null) {
            deffered.resolve();
        }

        $http.get('app/data/brands.json').then(function(res) {
            _hotelsFactory.brands = res.data;
            deffered.resolve();
        }).
        catch(function onError(err) {
            // Handle error
            console.log(err);
        });
        return deffered.promise;
    };

    /**
     * getHotel Function, returns desired hotel to hotel view Controller
     * @param hotel_id
     */
    _hotelsFactory.getHotel = function(hotel_id) {
        var deffered = $q.defer();
        angular.forEach(_hotelsFactory.hotels, function(hotel) {
            if( hotel['_id'] ==  hotel_id) {
                return deffered.resolve(hotel);
            }
        });
        return deffered.promise;
    };


    return _hotelsFactory;
}]);