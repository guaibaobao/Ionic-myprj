/*
* @Author: 虚竹
* @Date:   2016-10-19 10:27:59
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-24 09:42:51
*/

;(function() {
	'use strict';
	angular.module('category.controllers', [])

	.controller('CategoryCtrl', ['$scope', '$state', function($scope, $state) {
		// 1.获取数据
		function getCategoryData(){
	      $scope.categoryData = [
	        {
	          name:"潮流女装",
	          typeNumber:'102'
	        },
	        {
	          name:"品牌男装",
	          typeNumber:'103'
	        },
	        {
	          name:"热门推荐",
	          typeNumber:'101'
	        },
	        {
	          name:"内衣配饰",
	          typeNumber:'104'
	        },
	        {
	          name:"家用电器",
	          typeNumber:'105'
	        },
	        {
	          name:"电脑办公",
	          typeNumber:'106'
	        },
	        {
	          name:"手机数码",
	          typeNumber:'107'
	        },
	        {
	          name:"母婴频道",
	          typeNumber:'108'
	        },
	        {
	          name:"图书",
	          typeNumber:'109'
	        },
	        {
	          name:"家居家纺",
	          typeNumber:'110'
	        },
	        {
	          name:"居家生活",
	          typeNumber:'111'
	        },
	        {
	          name:"家具建材",
	          typeNumber:'112'
	        },
	        {
	          name:"热门推荐",
	          typeNumber:'101'
	        },
	        {
	          name:"居家生活",
	          typeNumber:'101'
	        },
	        {
	          name:"居家生活",
	          typeNumber:'101'
	        },
	        {
	          name:"居家生活",
	          typeNumber:'101'
	        },
	        {
	          name:"居家生活",
	          typeNumber:'101'
	        },
	        {
	          name:"居家生活",
	          typeNumber:'101'
	        },
	        {
	          name:"居家生活",
	          typeNumber:'101'
	        },{
	          name:"居家生活",
	          typeNumber:'101'
	        }
	      ];

	      // 设置某一个分类
	      // $state.go("");

    	}

	    $scope.getCategoryDetailData = function(typeNumber){

	      if(typeNumber == 102){
	        $scope.categoryDetailData = [
	          {
	            name:"毛呢大衣",
	            src:"img/category/nz1.jpg",
	            typeNumber:'10001'
	          },
	          {
	            name:"羽绒服",
	            src:"img/category/nz2.jpg",
	            typeNumber:'10002'
	          },
	          {
	            name:"针织衫",
	            src:"img/category/nz3.jpg",
	            typeNumber:'10003'
	          },
	          {
	            name:"连衣裙",
	            src:"img/category/nz4.jpg",
	            typeNumber:'10004'
	          },
	          {
	            name:"棉服",
	            src:"img/category/nz5.jpg",
	            typeNumber:'10005'
	          },
	          {
	            name:"长袖T恤",
	            src:"img/category/nz6.jpg",
	            typeNumber:'10006'
	          },
	          {
	            name:"羊绒衫",
	            src:"img/category/nz7.jpg",
	            typeNumber:'10007'
	          },
	          {
	            name:"衬衫",
	            src:"img/category/nz8.jpg",
	            typeNumber:'10008'
	          },
	          {
	            name:"风衣",
	            src:"img/category/nz9.jpg",
	            typeNumber:'10009'
	          },
	          {
	            name:"皮衣",
	            src:"img/category/nz10.jpg",
	            typeNumber:'10010'
	          },
	          {
	            name:"休闲裤",
	            src:"img/category/nz11.jpg",
	            typeNumber:'10011'
	          },
	          {
	            name:"牛仔裤",
	            src:"img/category/nz12.jpg",
	            typeNumber:'10012'
	          }
	        ];
	      }
	      else{
	        $scope.categoryDetailData = [
	          {
	            name:"夹克",
	            src:"img/category/nanz1.jpg",
	            typeNumber:'10013'
	          },
	          {
	            name:"衬衫",
	            src:"img/category/nanz2.jpg",
	            typeNumber:'10014'
	          },
	          {
	            name:"牛仔裤",
	            src:"img/category/nanz3.jpg",
	            typeNumber:'10015'
	          },
	          {
	            name:"羽绒服",
	            src:"img/category/nanz4.jpg",
	            typeNumber:'10016'
	          },

	          {
	            name:"T恤",
	            src:"img/category/nanz5.jpg",
	            typeNumber:'10017'
	          },
	          {
	            name:"休闲裤",
	            src:"img/category/nanz6.jpg",
	            typeNumber:'10018'
	          },
	          {
	            name:"卫衣",
	            src:"img/category/nanz7.jpg",
	            typeNumber:'10019'
	          },
	          {
	            name:"针织衫",
	            src:"img/category/nanz8.jpg",
	            typeNumber:'10020'
	          },
	          {
	            name:"棉服",
	            src:"img/category/nanz9.jpg",
	            typeNumber:'10021'
	          }
	        ];
	      }

	    };
	    getCategoryData();
    	$scope.getCategoryDetailData();

	    // 3.css获取当前焦点 -- 优化
	    $scope.focusCurrentCategory = function(event) {
	    	// console.log(event.target);
	    	// 代码的健壮性
	    	if(event) {

	    	}
	    	$(event.target).siblings().removeClass('nav-current').addClass('nav-blur');
	    	$(event.target).addClass('nav-current');
	    }


	    // 4.返回首页
    	$scope.goBack = function() {
    		// $state.go('tab.home');
    		window.history.back();
    	};

	}]);
})();
