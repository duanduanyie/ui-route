var myapp = angular.module('myApp',['ui.router']);
myapp.config(function ($stateProvider,
							$urlRouterProvider) {
	// body..
			$urlRouterProvider.otherwise('/');
			$stateProvider
			.state('mainpage',{
					url: '/',
					templateUrl: 'mainpage.html'
					})
			.state('childpage',{
					url:'/childpage',
					templateUrl:'childpage.html'
			})
			.state('childpage.sibbling1',{
					url:'/sibblig1',
					templateUrl:'sibbling1.html'
			})
			.state('childpage.sibbling2',{
					url:'/sibbling2',
					templateUrl:'sibbling2.html'
			})
			.state('childpage.sibbling3',{
					url:'/sibbling3',
					templateUrl:'sibbling3.html'
			});

})