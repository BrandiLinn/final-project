'use strict';

foodMeApp.directive('fmTime', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      scope.time = Math.floor(Math.random()*100);
    },
    template:
      '{{time}}'
  };
});
