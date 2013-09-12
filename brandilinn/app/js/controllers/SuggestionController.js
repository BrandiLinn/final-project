'use strict';

foodMeApp.controller('SuggestionController',
    function SuggestionController($scope, Restaurant) {

  var allRestaurants = Restaurant.query(pickRestaurant);

  function pickRestaurant() {
    var count = -1;
    angular.forEach(allRestaurants, function() {
      count += 1;
    });
    
    var number = Math.floor(Math.random()*100);
    while (number > count) {
      number = Math.floor(number/2);
    }
    console.log(number);
    $scope.suggested = allRestaurants[number];
  };

});
