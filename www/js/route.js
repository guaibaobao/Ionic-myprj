/*
* @Author: 虚竹
* @Date:   2016-10-18 16:42:37
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-23 22:08:41
*/

angular.module('route', ['guidePage.route', 'tabs.route', 'home.route', 'category.route', 'goodsList.route', 'details.route', 'cart.route', 'account.route'])
.config(function($stateProvider, $urlRouterProvider) {

    if(localStorage["isFirst"])
    {
    	console.log("msg1");
      $urlRouterProvider.otherwise('/tab/home');
    }
    else {
    	console.log("msg2");
      $urlRouterProvider.otherwise('/guidePage');
    }


});