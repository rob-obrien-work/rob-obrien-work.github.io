(function(angular) {
  angular.module('SimpleServer', ['ngRoute', 'ui.bootstrap']);
})(angular);

(function(angular) {
  angular.module('SimpleServer').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
  
    $routeProvider
    .when('/home', {
      controller: 'HomeController',
      templateUrl: '/app/site/home/index.html',
    })
    .when('/test', {
      controller: 'TestController',
      templateUrl: '/app/site/test/index.html'
    })
    .when('/wishlist', {
      
      templateUrl: '/app/site/wishlist/index.html'
    })
   .otherwise({ redirectTo: '/home' });

  }]);
})(angular);

(function(angular) {
  angular.module('SimpleServer').controller("HomeController", function ($scope) {
    $scope.msg = "Alooo Home";
  });
})(angular);

(function(angular) {
  angular.module('SimpleServer').controller("TestController", function ($scope) {
    $scope.msg = "Alooo Test";
  });
})(angular);

