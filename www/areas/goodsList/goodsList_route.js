/*
* @Author: 虚竹
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-20 15:23:17
*/

angular.module('goodsList.route', ['goodsList.controllers', 'goodsList.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('goodsList', {
		url: '/goodsList/:typeNumber',        // /tab/dash $stateParams.typeNumber
	    templateUrl: 'areas/goodsList/goodsList.html',
	    controller: 'GoodsListCtrl'
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
