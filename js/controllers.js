angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {

})

.controller('UserCtrl', function($scope, $rootScope, $ionicUser) {
  /**
   * Identifies a new user with the Ionic User service (read the docs at http://docs.ionic.io/identify/). This should be
   * called before any other registrations take place.
   **/
  $scope.identifyUser = function() {
    console.log('Identifying with Ionic User service');

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID()
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'Ionitron',
      message: 'I come from planet Ion'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      $scope.identifiedUser = user;
    });
  };
})

.controller('PushCtrl', function($scope, $rootScope, $ionicPush) {
  /**
   * Write your own code here to handle new device tokens from push notification registration as they come in.
   **/
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    console.log('Got token', data.token, data.platform);
    $scope.token = data.token;
  });

  /**
   * Registers the currently identified Ionic User for push notifications on the current device. This should either pass
   * a user object to identify or be called after $ionicUser.identify()
   * (read the docs at http://docs.ionic.io/push/installation/).
   **/
  $scope.pushRegister = function() {
    console.log('Registering user for Ionic Push');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Should new pushes show an alert on your screen?
      canSetBadge: true, //Should new pushes be allowed to update app icon badges?
      canPlaySound: true, //Should notifications be allowed to play a sound?
      canRunActionsOnWake: true, // Whether to run auto actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        return true;
      }
    }).then(function(deviceToken) {
      //Save the device token, if necessary
      $scope.token = deviceToken;
    });
  };
})

.controller('AnalyticsCtrl', function($scope, $ionicAnalytics) {

  // Track a fake purchase event.
  $scope.trackPurchase = function() {
    $ionicAnalytics.track('purchase', {
      item_id: 101,
      item_name: 'A-Trak player'
    });
    $scope.queuedAnalytics = true;
  };

  // Track a fake review event
  $scope.trackReview = function() {
    $ionicAnalytics.track('review', {
      star_rating: 5,
      reviewer_name: 'John',
      content: 'Awesome app!'
    });
    $scope.queuedAnalytics = true;
  };
})

.controller('DeployCtrl', function($scope) {

});
