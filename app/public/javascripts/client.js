(function(){
    angular.module('main', [])
        .controller('mainCtrl', function($scope){
            $scope.timestamp = new Date()
        })
})()