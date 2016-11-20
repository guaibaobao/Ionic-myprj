/*
* @Author: 虚竹
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-23 14:46:24
*/

angular.module('account.route', ['account.controllers', 'account.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('account', {
		url: '/account',        // /tab/dash
	    templateUrl: 'areas/account/account.html',
	    controller: 'AccountCtrl'
	})

	// .state('category.products', {
	// 	url: '/category/:CategoryId',
	// 	views: {
	// 		'category.products': {
	// 			templateUrl: 'areas'
	// 		}
	// 	}
	// })

});
