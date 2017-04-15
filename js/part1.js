var alamApp = angular.module('alamApp',[]);

alamApp.controller('myCtrl', function($scope) {
    $scope.name = "John Doe";
    $scope.email = "mahtab46@gmail.com";
});

alamApp.controller('mysecondCtrl', function($scope) {
    $scope.name = "Ranjay Doe";
    $scope.email = "abc@gmail.com";
    $scope.school = "bihar";
});