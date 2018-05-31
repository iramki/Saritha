angular.module('Saritha').controller("aboutUsController", function($scope, $http) {
	
	$scope.load = function(){
		$(document).ready(function (){
			$('.nav li').removeClass("active");
			$('.aboutLink').parent().addClass("active");
			
		});
	};
	$scope.load();

})

