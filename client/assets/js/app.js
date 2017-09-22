'use strict';

var app = angular.module('app', ['ngRoute','ngCookies', 'pascalprecht.translate'])
    .config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {

   	$httpProvider.interceptors.push('authInterceptor');

    $routeProvider
    .when('/', {
        templateUrl: 'assets/views/partials/main.html',
        controller: 'homeController'
    })
    .when('/user', {
        templateUrl: 'assets/views/partials/user.html',
        controller: 'userController'
    })
    .when('/user-data', {
        templateUrl: 'assets/views/partials/user-data.html',
        controller: 'userController'
    })
    .when('/contact', {
        templateUrl: 'assets/views/partials/contact.html',
        controller: 'contactController'
    })
    .when('/contact-data', {
        templateUrl: 'assets/views/partials/contact-data.html',
        controller: 'contactController'
    })
    .when('/operator', {
        templateUrl: 'assets/views/partials/operator.html',
        controller: 'operatorController'
    })
    .when('/operator-data', {
        templateUrl: 'assets/views/partials/operator-data.html',
        controller: 'operatorController'
    })
    .when('/auth', {
        templateUrl: 'assets/views/partials/auth.html',
        controller: 'authController'
    })
    .when('/tasks', {
        templateUrl: 'assets/views/task/tasks.html',
        controller: 'taskController'
    })
    .otherwise({
        redirectTo: '/'
    });

}]).config(['$translateProvider', function ($translateProvider) {

    /*
    $translateProvider.useStaticFilesLoader({
        prefix : '/i18n/',
        suffix : '.json'
    });

    $translateProvider.useLocalStorage();
    $translateProvider.usePostCompiling(true);
    */

    $translateProvider.useSanitizeValueStrategy('escaped');

}]);
