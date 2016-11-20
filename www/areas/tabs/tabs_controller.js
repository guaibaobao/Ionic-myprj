/*
* @Author: 虚竹
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-22 14:40:31
*/

;(function() {
	'use strict';
	angular.module('tabs.controllers', [])

	.controller('TabsCtrl', ['$scope', 'IndexdbFt', function($scope, IndexdbFt) {
		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//
		$scope.number = null;
		$scope.$on('$ionicView.enter', function(e) {
			IndexdbFt.getAll("order", function(data) {
				for(var i = 0; i < data.length; i++) {
					$scope.number += parseInt(data[i].number);
					$scope.$apply();
				}
			})
		});
		
	}]);
})();

