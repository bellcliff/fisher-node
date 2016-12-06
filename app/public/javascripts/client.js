(function(){
    angular.module('main', ['ngRoute', 'ui.router'])
        .controller('mainCtrl', function($scope){
            $scope.title = new Date()
            _.each(['$stateChangeStart', '$stateChangeSuccess', '$stateNotFound', '$stateChangeError'], function(v, k){
                console.log('bind ui router event', v)
                $scope.$on(v, function(){console.log(v, arguments)})
            })
        })
})()