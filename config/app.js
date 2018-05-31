var app = angular.module('Saritha', [ 'ngRoute', 'ngAnimate', 'oc.lazyLoad', 'ngCookies']).controller("mainController",function($scope, $http, $cookies,$location) {
	
});
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : './templates/homePage.html',
        controller : 'homePageController',
        resolve : {
            lazy : [ '$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([ {
                    name : 'Saritha',
                    files : [ './controllers/homePageController.js' ]
                } ]);
            } ]
        }
    })
    .when('/aboutUs', {
        templateUrl : './templates/aboutUs.html',
        controller : 'aboutUsController',
        resolve : {
            lazy : [ '$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([ {
                    name : 'Saritha',
                    files : [ './controllers/aboutUsController.js' ]
                } ]);
            } ]
        }
    })
    .when('/contactUs', {
        templateUrl : './templates/contactUs.html',
        controller : 'contactUsController',
        resolve : {
            lazy : [ '$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([ {
                    name : 'Saritha',
                    files : [ './controllers/contactUsController.js' ]
                } ]);
            } ]
        }
    })
    .when('/dentalVaccation', {
        templateUrl : './templates/dentalVaccation.html',
        controller : 'dentalVaccationController',
        resolve : {
            lazy : [ '$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([ {
                    name : 'Saritha',
                    files : [ './controllers/dentalVaccationController.js' ]
                } ]);
            } ]
        }
    })
     .when('/gallery', {
        templateUrl : './templates/gallery.html',
        controller : 'galleryController',
        resolve : {
            lazy : [ '$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load([ {
                    name : 'Saritha',
                    files : [ './controllers/galleryController.js' ]
                } ]);
            } ]
        }
	})
	.otherwise ({
        redirectTo : '/'
    });
});