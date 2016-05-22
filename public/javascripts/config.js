app.config(['$stateProvider', '$urlProvider',function($stateProvider, $urlProvider) {

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        resolve:{
            seriePromisse: ['series', function(series){
                return series.getSeries();
            }]
        }
    })

    .state('series',{
        url: '/series/{id}',
        templateUrl: 'views/series.html',
        controller: 'SeriesCtrl',
        resolve: {
            serie: ['$stateParams', 'series', function($stateParams, series){
                return series.getSerie($stateParams.id);
            }]
        }
    })

    .state('adiciona', {
        url: '/adiciona',
        templateUrl: 'views/adiciona.html',
        controller: 'MainCtrl',
    })

    .state('delete', {
        url: '/delete/{id}',
        templateUrl:'views/apaga.html',
        controller:'SeriesCtrl',
        resolve:{
            serie:['$stateParams', 'series', function($stateParams, series){
                return series.getSerie($stateParams.id);
            }]
        }
    })

    .state('update', {
        url: '/update/{id}',
        templateUrl: 'views/atualiza.html',
        controller: 'SeriesCtrl',
        resolve: {
            serie: ['$stateParams', 'series', function($stateParams, series){
                return series.getSerie($stateParams.id);
            }]
        }
    });

    $urlRouterProvider.otherwise('home');

}]);