/*
* @Author: 虚竹
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-19 14:26:17
*/

angular.module('home.route', ['home.controllers', 'home.services'])
.config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
  	// setup an abstract state for the tabs directive
	.state('tab.home', {
		url: '/home',        // /tab/dash
		views: {
		  'tab-home': {  //视图的名字
		    templateUrl: 'areas/home/home.html',
		    controller: 'HomeCtrl'
		  }
		}
	})

});
