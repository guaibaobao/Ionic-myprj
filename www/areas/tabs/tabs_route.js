/*
* @Author: 虚竹
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-19 14:16:50
*/

angular.module('tabs.route', ['tabs.controllers', 'tabs.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'areas/tabs/tabs.html',
		controller: 'TabsCtrl'
	})

});
