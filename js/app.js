(function() {
var app = angular.module('gato-x-liebre',['gallery', 'wu.masonry', 'ngRoute', 'frontpage']);
  app.config( ['$routeProvider', function($routeProvider) {
    $routeProvider
			.when('/', {
				templateUrl: '../inicio.html'
			})
			.when('/contacto', {
				templateUrl: '../contacto.html'
			})
      .when('/quehacemos', {
				templateUrl: '../que.html'
			})
      .when('/otrasactividades', {
				templateUrl: '../otra.html'
			})
			.otherwise({
				redirectTo: '/'
			});
  }]);
})();
