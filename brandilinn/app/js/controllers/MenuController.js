'use strict';

foodMeApp.controller('MenuController',
    function MenuController($scope, $routeParams, Restaurant, cart) {

  $scope.restaurant = Restaurant.get({id: $routeParams.restaurantId});
  $scope.cart = cart;

  //////////////////////


var filter = $scope.filter = {
    price: null,
    name: null
  };

  var allRestaurants = Restaurant.query(filterAndSortItems);
  var allItems = $scope.restaurant.$query(filterAndSortItems);
  $scope.$watch('filter', filterAndSortItems, true);

  console.log(allItems);

  function filterAndSortItems() {
    $scope.menuItems = [];

    // filter
    angular.forEach(allItems, function(item, key) {
      if (filter.price && filter.price !== item.price) {
        return;
      }

      if (filter.name && filter.name !== item.name) {
        return;
      }

      $scope.menuItems.push(item);
    });


    // sort
    $scope.menuItems.sort(function(a, b) {
      if (a[filter.sortBy] > b[filter.sortBy]) {
        return filter.sortAsc ? 1 : -1;
      }

      if (a[filter.sortBy] < b[filter.sortBy]) {
        return filter.sortAsc ? -1 : 1;
      }

      return 0;
    });
  };


  $scope.sortBy = function(key) {
    if (filter.sortBy === key) {
      filter.sortAsc = !filter.sortAsc;
    } else {
      filter.sortBy = key;
      filter.sortAsc = true;
    }
  };


  $scope.sortIconFor = function(key) {
    if (filter.sortBy !== key) {
      return '';
    }

    return filter.sortAsc ? '\u25B2' : '\u25BC';
  };



});
