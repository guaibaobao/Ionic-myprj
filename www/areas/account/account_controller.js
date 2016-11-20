/*
* @Author: 虚竹
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-23 21:05:23
*/

;(function() {
	'use strict';
	angular.module('account.controllers', [])

	.controller('AccountCtrl', ['$scope', '$ionicActionSheet', '$cordovaCamera', '$cordovaImagePicker', function($scope, $ionicActionSheet, $cordovaCamera, $cordovaImagePicker) {
		if(localStorage["touxiang"]){
			var image = document.getElementById('touxiang');
			image.src = localStorage["touxiang"];
		}
		// 调用图库或者摄像头
	    $scope.func_showAction = function(){

	      // 显示操作表
	      $ionicActionSheet.show({
	        buttons: [
	          { text: '照相机' },
	          { text: '图库' },
	        ],
	        titleText: '请选择文件源',
	        cancelText: '取消',
	        buttonClicked: function(index) {
	          switch(index){
	            case 0:
	            	func_getPicFromCamera();
	            	break;
	            case 1:
	            	func_getPicFromPicture();
	             	break;
	          }
	          return true;
	        }
	      });
	    }

	    // 从摄像头获取图片
	    var func_getPicFromCamera = function(){

	      var options = {
	        quality: 100,
	        destinationType: Camera.DestinationType.FILE_URI,
	        sourceType: Camera.PictureSourceType.CAMERA,
	        allowEdit: true,
	        encodingType: Camera.EncodingType.JPEG,
	        targetWidth: 100,
	        targetHeight: 100,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false,
	        correctOrientation:true
	      };

	      $cordovaCamera.getPicture(options).then(function(imageURL) {
	        var image = document.getElementById('touxiang');
	        // image.src = "data:image/jpeg;base64," + imageData;
	        // 
	        image.src = imageURL;
	        localStorage["touxiang"] = imageURL;
	      }, function(err) {
	        //$scope.AlertPopup(err);
	      });
	    }

	    // 从图库获取图片
	    var func_getPicFromPicture = function(){

	      var options = {
	        // quality: 100,
	        // destinationType: Camera.DestinationType.DATA_URL,
	        // sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
	        // allowEdit: true,
	        // encodingType: Camera.EncodingType.JPEG,
	        // targetWidth: 100,
	        // targetHeight: 100,
	        // popoverOptions: CameraPopoverOptions,
	        // saveToPhotoAlbum: false,
	        // correctOrientation:true
	        quality: 75,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
	        allowEdit: true,
	        encodingType: Camera.EncodingType.JPEG,
	        targetWidth: 500,
	        targetHeight: 500,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false
	      };

	      $cordovaImagePicker.getPictures(options).then(function(result) {
	        var image = document.getElementById('touxiang');
	        // image.src = "data:image/jpeg;base64," + imageData;
	        image.src = result[0];
	        localStorage["touxiang"] = result[0];
	      }, function(err) {
	        //$scope.AlertPopup(err);
	      });
	    }

	    $scope.func_callPhone = function(number) {
	    	window.location.href = "tel:" + number;
	    }

	    $scope.func_exitApp=function(){
			var confirmPopup = $ionicPopup.confirm({
				title: '提示',
				template:"确认退出？"
			});
			confirmPopup.then(function (res) {
				if(res){
			  		// 退出app
			  		ionic.Platform.exitApp();
				}
			});

	    }
	    
	}]);
})();

