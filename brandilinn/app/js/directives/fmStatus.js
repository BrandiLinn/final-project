'use strict';

foodMeApp.directive('fmStatus', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      var number = Math.floor(Math.random()*10);
      var weAre = [
        'totally awesome',
        'hungry',
        'in ur base',
        'the lords of this realm',
        'stealing your cookies',
        'baking you cookies',
        'right behind you',
        'moonlighting as Santa\'s elves',
        'the greatest thing since sliced bread',
        'whalers on the moon'
      ];
      scope.status = weAre[number];
      element[0].onclick = function() {
        scope.status = weAre[number];
        console.log('test');
      }
    },
    template:
      '<p>We\'re also {{status}}!</p>'
  };
});
