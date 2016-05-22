'use strict';

app.controller('SeriesCtrl', ['$scope', '$location', 'series', 'serie', function($scope, $location, series, serie){

    $scope.serie = serie;

    $scope.deleteSerie = function(){
        series.deleteSerie($scope.serie_id).success(function(data){
            $location.path('/home');
        });
    };

    $scope.putSerie = function(){
        series.putSerie($scope.serie).success(function(data){
            console.log(data.message);
            $location.path('/home');
        });
    };

}]);