/*
* @Author: 虚竹
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-23 22:09:50
*/

angular.module('guidePage.controllers', ['guidePage.services'])

.controller('GuidePageCtrl', function($scope, GuidePageFt, $state) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	var mySwiper = new Swiper('.swiper-container', {
		pagination : '.swiper-pagination',
		onSlideChangeEnd: function(swiper){
			console.log(swiper);
     	 	console.log(swiper.activeIndex);
     	 	var item = $("#tip" + (swiper.activeIndex + 1));
     	 	// item.classList.remove('hidden');
     	 	// item.classList.add('guide-show');
     	 	var tips = $(".tip");
     	 	console.log(tips);
 	 		// tips[i].addClass('hidden');
 	 		tips.each(function(index, el) {
 	 			console.log(index);
 	 			console.log(el);
 	 			$(el).addClass('hidden');
 	 		});

     	 	item.removeClass("hidden").addClass('guide-show');
    	}
	});

	$scope.func_goHome=function(){
      localStorage["isFirst"]=true;
      $state.go('tab.home');
    }

})