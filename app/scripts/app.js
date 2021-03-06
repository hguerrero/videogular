'use strict';
angular.module('myApp',
    [
      "ngRoute",
      "ngAnimate",
      "angulartics.google.analytics",
      "com.2fdevs.videogular",
      "com.2fdevs.videogular.plugins.controls",
      "com.2fdevs.videogular.plugins.overlayplay",
      "com.2fdevs.videogular.plugins.buffering",
      "com.2fdevs.videogular.plugins.poster",
      "com.2fdevs.videogular.plugins.imaads",
      "com.2fdevs.videogular.plugins.dash",
      "com.2fdevs.videogular.plugins.analytics"
    ]
  )
	.config(
    function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: "ctrl"
        })
        .when('/audio', {
          templateUrl: 'views/audio.html',
          controller: 'AudioCtrl',
          controllerAs: "ctrl"
        })
        .when('/config', {
          templateUrl: 'views/config.html',
          controller: 'ConfigCtrl',
          controllerAs: "ctrl"
        })
        .when('/imaads', {
          templateUrl: 'views/imaads.html',
          controller: 'ImaAdsCtrl',
          controllerAs: "ctrl"
        })
        .when('/dash', {
          templateUrl: 'views/dash.html',
          controller: 'DashCtrl',
          controllerAs: "ctrl"
        })
        .when('/dash-live', {
          templateUrl: 'views/dash-live.html',
          controller: 'DashLiveCtrl',
          controllerAs: "ctrl"
        })
        .when('/templating', {
          templateUrl: 'views/templates.html',
          controller: 'TemplatesCtrl',
          controllerAs: "ctrl"
        })
        .when('/cue-points', {
          templateUrl: 'views/cue-points.html',
          controller: 'CuePointsCtrl',
          controllerAs: "ctrl"
        })
        .otherwise({
          redirectTo: '/'
        }
      );
    }
  );
