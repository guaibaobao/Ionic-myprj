/*
* @Author: 虚竹
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-20 10:37:33
*/

angular.module('category.route', ['category.controllers', 'category.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('category', {
		url: '/category',        // /tab/dash
	    templateUrl: 'areas/category/category.html',
	    controller: 'CategoryCtrl'
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
