(function(){
    angular.module('main')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/');

            $stateProvider.state('main', {
                url: '/',
                views: {
                    control: {
                        controller: 'ctrlPanelController',
                        templateUrl: 'modules/control/template.html'
                    },
                    scan: {
                        templateUrl: 'modules/scan/template.html'
                    },
                    screen: {
                        templateUrl: 'modules/screen/template.html'
                    }
                }
            })
        }])
})()
