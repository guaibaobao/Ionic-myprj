/*
* @Author: 虚竹
* @Date:   2016-10-23 13:34:44
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-23 13:37:33
*/

;(function() {
	angular.module('popup', [])
	.factory('PopupFt', ['$ionicPopup', function($ionicPopup) {
		return {
			AlertPopup: function(message) {
				var alertPopup = $ionicPopup.alert({
					title: '提示',
					template: message
				});
			}
		}
	}]);
})();