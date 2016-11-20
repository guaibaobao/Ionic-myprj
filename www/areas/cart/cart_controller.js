/*
* @Author: 虚竹
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-24 09:48:56
*/

;(function() {
	'use strict';
	angular.module('cart.controllers', [])

	.controller('CartCtrl', ['$scope', 'CartFt', 'PopupFt', function($scope, CartFt, PopupFt) {
		$scope.obj_cartDbData = {
			data: '',
			total: 0
		}

		function getAllData() {
			var promise = CartFt.getAllData();
			promise.then(function(data) {
				if(data && (data != null) && (data.length > 0)) {	
					var total = 0;
					$scope.obj_cartDbData.data = data;
					for(var i = 0; i < data.length; i++) {
						total += parseFloat(data[i].price) * data[i].number * 1.0;
					}

					console.log(total);
					$scope.obj_cartDbData.total = total.toFixed(2);
				}else {
					PopupFt.AlertPopup("没有任何商品");
				}
			}, function() {
				PopupFt.AlertPopup("获取商品失败");
			}).finally(function() {

			});
		}

		getAllData();

		$scope.addition = function(id) {
			console.log(id);
			// 
			var promise = CartFt.get(id);
			promise.then(function(data) {
				console.log(data);
				data.number++;
				updateData(data);
			}, function(e) {

			}).finally(function(){

			});
		}

		$scope.subtraction = function(id) {
			var promise = CartFt.get(id);
			promise.then(function(data) {
				// C 
				if(data.number != 1) {
					data.number--;
					updateData(data);
				}
			}, function(e) {

			}).finally(function(){

			});
		}

		function updateData(data) {
			var promise = CartFt.updateData(data);
			promise.then(
				function () {
			  		getAllData();
				},
				function (e) {
			  		CommonJs.AlertPopup(e);
				}
			).finally(function () {

			});
		}
	}]);
})();

