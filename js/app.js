// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ngCordova',
  'ionic.service.core',
  'ionic.service.push',
  'ionic.service.analytics',
  'starter.controllers',
  'starter.services'
])

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: '54317616',
    // The public API key all services will use for this app
    api_key: '4177f5eda12aa203f540a4da49cbb0db8deca9b145cf1e73',
    // TODO: Deal with all these keys, Batman!
    api_write_key: '06d1ca047b5ce1d8acbeac7a8b7f44eb2ebc4568df25f495172868ea073fadad25ffa5880fbd5ab60f71fbb8e45e4b99c49ea4661d35e2177c0161b576c6fbea5123ae1ffef8d36ddbb30d618f2fb28cafae8430466438d39fa5a520e8578c629a557107b00ce8b1e306d1e459a60ad56340956ad19a6f791571636b815b2c2022f422cdb1a628dd7bc58232be2aa26b',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    // gcm_id: 'YOUR_GCM_ID'
  });
}])

.run(function($ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    // Color the iOS status bar text to white
    if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusBar.style(1); //Light
    }

    // Default update checking
    $rootScope.updateOptions = {
      interval: 2 * 60 * 1000
    }

    // Watch Ionic Deploy service for new code
    $ionicDeploy.watch($rootScope.updateOptions).then(function() {}, function() {}, function(hasUpdate) {
      $rootScope.lastChecked = new Date();
      console.log('WATCH RESULT', hasUpdate);
    }
);
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  // Welcome tab
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  // Ionic User tab
  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/tab-user.html',
        controller: 'UserCtrl'
      }
    }
  })

  // Ionic Push tab
  .state('tab.push', {
    url: '/push',
    views: {
      'tab-push': {
        templateUrl: 'templates/tab-push.html',
        controller: 'PushCtrl'
      }
    }
  })

  // Ionic Deploy tab
  .state('tab.deploy', {
    url: '/deploy',
    views: {
      'tab-deploy': {
        templateUrl: 'templates/tab-deploy.html',
        controller: 'DeployCtrl'
      }
    }
  })

  // Ionic Analytics tab
  .state('tab.analytics', {
    url: '/analytics',
    views: {
      'tab-analytics': {
        templateUrl: 'templates/tab-analytics.html',
        controller: 'AnalyticsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
