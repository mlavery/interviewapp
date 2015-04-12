angular.module('interview-builder').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
	function($urlRouterProvider, $stateProvider, $locationProvider){
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('addQuestion', {
				url: '/addQuestion',
				templateUrl: 'client/addQuestion/templates/addQuestion.tpl',
				controller: 'addQuestionCtrl'
			})

		$urlRouterProvider.otherwise("/addQuestion");
	}
]);
