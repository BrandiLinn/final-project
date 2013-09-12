'use strict';

foodMeApp.controller('ImagesController',
    function ImagesController($scope, Restaurant) {

  var allRestaurants = Restaurant.query(gatherRestaurants);

  function gatherRestaurants() {
    $scope.restaurants = [];
    angular.forEach(allRestaurants, function(item, key) {
      $scope.restaurants.push(item);
    });
  };

});
