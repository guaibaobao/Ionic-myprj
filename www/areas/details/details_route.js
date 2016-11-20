/*
* @Author: 虚竹
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-21 09:50:05
*/

angular.module('details.route', ['details.controllers', 'details.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('details', {
		url: '/details/:productId',        // /tab/dash $stateParams.typeNumber
	    templateUrl: 'areas/details/details.html',
	    controller: 'DetailsCtrl'
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
