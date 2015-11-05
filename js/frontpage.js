(function() {
	var app = angular.module('frontpage',[]);
	
	app.directive('frontpageContent', function () {
		return {
			scope: {},
			restrict: 'E',
			templateUrl: '/templates/frontpage.html',
			controller: ['$scope', function($scope) {
							$scope.pageContent = [
								{
									title: "Vení a conocernos.",
									text: "Estamos abiertos de 10 a ...",
									image: "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-9/11695980_1606596006268918_5600602872263873932_n.jpg?oh=be523808c77569fcbe6fcb3d5df0aad4&oe=56F71358&__gda__=1454629872_e82981fa62dc938979ca96158ab0ba7f",
									link: "https://www.facebook.com/Gato-por-liebrereparaci%C3%B3n-de-bicicletas-1605164353078750/",
									published: "5/11/2015"
								},
								{
									title: "Sabado 24 - Vamos de feria!",
									image: "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xat1/t31.0-8/s960x960/12138578_1507251792932051_5148521820045281809_o.jpg",
									link: "https://www.facebook.com/events/1643351972607558/",
									published: "20/10/2015"
								}
							]
			 			}],
			controllerAs: 'content'
		};
	});
})();