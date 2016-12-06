(function(){
    angular.module('main')
        .controller('ctrlPanelController', function($scope){
            $scope.buttons = [{
                label: '开始'
            }, {
                label: '停止'
            }];
        })
})()