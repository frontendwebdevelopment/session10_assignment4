var app = angular.module('myApp', []);
app.controller('myController1', function($scope) {
    $scope.invite = "Hello World";
});

app.controller('myController2', function($scope) {
    $scope.invite = "Good Morning";
})