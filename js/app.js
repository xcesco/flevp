var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : './pages/home.html',
            controller  : 'HomeController'
        })

        .when('/progetti', {
            templateUrl : './pages/projects.html',
            controller  : 'BlogController'
        })

        .when('/team', {
            templateUrl : './pages/team.html',
            controller  : 'AboutController'
        })

        .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function($scope) {
    $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
    $scope.message = 'Hello from AboutController';
});