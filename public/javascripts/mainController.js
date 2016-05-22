'use strict';

app.controller('MainCtrl', ['$scope', '$location', 'series', function($scope, $location, series){

    $scope.series = series.series;

    $scope.addSerie = function(){
        if (!$scope.titulo || $scope.titulo === '')
            return;

        series.addSerie({
            titulo: $scope.titulo,
            genero: $scope.genero,
            trailerURL: $scope.trailerURL,

        });

        $location.path('/home');
    };

}]);