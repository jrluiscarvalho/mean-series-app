'use strict';

app.factory('series', ['$http', function($http){

    var service = {
        series:[]
    };

    service.getSeries = function(){
        return $http.get('/series').success(function(data){
            angular.copy(data, service.series);
        });
    };

    service.getSerie = function(id){
        return $http.get('series', + id).success(function(data){
            service.series.push(date);
        });
    };

    service.addSerie = function(serie){
        return $http.post('/series', serie).success(function(data){
            service.series.push(data);
        });
    };

    service.deleteSerie = function(id){
        return $http.delete('/series/' + id);
    };

    service.putSerie = function(serie){
        return $http.put('/series/' + serie._id, serie);
    };

    return service;


}]);