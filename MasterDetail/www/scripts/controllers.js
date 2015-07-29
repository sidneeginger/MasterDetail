(function () {
    'use strict';
    var angularControllers = angular.module('angularControllers', []);

    angularControllers.controller('ListCtrl', ['$scope', '$http', '$location', '$route',
      function ($scope, $http, $location, $route) {
       

          $scope.orderProp = 'model';

          $scope.go = function (route) {
              // $scope.$apply(function () { $location.path(route); });
              $location.path(route);
          }

          $scope.go('/realtime');

      }]);

    angularControllers.controller('DetailCtrl', ['$scope', '$routeParams', '$http',
      function ($scope, $routeParams, $http) {
        
      }]);
})();