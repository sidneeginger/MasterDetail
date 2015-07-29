(function () {
    'use strict';
    var angularApp = angular.module('angularApp', [
      'ngRoute',
      'angularControllers'
    ]);

    // Fix for platform-specific URL prefixing.
    angularApp.config([
        '$compileProvider',
        function ($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
            // Use $compileProvider.urlSanitizationWhitelist(...) for Angular 1.2
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|x-wmapp0):|data:image\//);
        }
    ]);


    angularApp.config(['$routeProvider',
      function ($routeProvider) {
          $routeProvider.
            when('/realtime', {
                templateUrl: 'partials/realtimedata.html',
                controller: 'DetailCtrl'
            }).
            when('/message', {
                templateUrl: 'partials/message.html',
                controller: 'DetailCtrl'
            }).
             when('/history', {
                 templateUrl: 'partials/history.html',
                 controller: 'DetailCtrl'
             }).
             when('/setting', {
                 templateUrl: 'partials/setting.html',
                 controller: 'DetailCtrl'
             }).
            otherwise({
                redirectTo: '/realtime'
            });
      }]);
})();