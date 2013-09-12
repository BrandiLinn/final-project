'use strict';

foodMeApp.controller('SuggestionController',
    function SuggestionController($scope, $routeParams, Restaurant) {

  $scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});

  console.log($scope.restaurant);

/*  function filterAndSortItems() {
    
  };

  $scope.sortBy = function(key) {
    
  };*/

});
