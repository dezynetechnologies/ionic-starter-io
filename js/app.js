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
  'ionic.service.deploy',
  'ionic.service.analytics',
  'starter.controllers'
])

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: 'eeabf7a4',
    // The public API key all services will use for this app
    api_key: 'a2d6504815127e5dcdc2d488f72199a28931741003df4d19',
    // The write key your app will use for analytics
    api_write_key: '43b10fd205812ad85ae7a4c2ebbf320c6a7ed163bea12c1c4da19a5d086f5e70ca95121d17338d045bbacf1e1ef9326e86c02c6a475808ec5d0fe50388187d58a478ebac3820346bbcf2deefeebbc470c674a1b013491d6f3aaac8a7768104f71eb3d360c09a849ba17bee31988aa53f5ab8c37db52b18532d221d63e5ac47804e8ea2d5d74e78213d3bcf9ffd7ecf69',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    gcm_id: '458002019577',
    // If true, will attempt to send pushes through the developer gateway instead of GCM/APNS
    dev_push: false
  });
}])

.run(function($rootScope, $ionicDeploy, $ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    /**
    if (window.cordova) {
      // Ensure latest update is loaded
      $ionicDeploy.load();
    } else {
      console.log("LOL TRY HARDER");
    }
    **/

    // Color the iOS status bar text to white
    if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusBar.style(1); //Light
    }

    // Default update checking
    $rootScope.updateOptions = {
      interval: 2 * 60 * 1000
    };

    // Watch Ionic Deploy service for new code
    $ionicDeploy.watch($rootScope.updateOptions).then(function() {}, function() {}, function(hasUpdate) {
      $rootScope.lastChecked = new Date();
      console.log('WATCH RESULT', hasUpdate);
    });
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
