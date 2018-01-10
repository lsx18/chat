var app=angular.module('app',[]);
app.controller('tabcontroller',function($scope){
  	var vm=$scope.vm;
});

angular
    .module('app', [])
    .controller('JumpController', function($scope) {
        $scope.jump = function(url) {
            window.location = url;
        }
    });