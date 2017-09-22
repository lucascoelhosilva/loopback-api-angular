'use strict';

app.factory('Task', function($http, config) {

    var baseUrl = config.baseUrl+'/api/Tasks';

    var Task = {};

    Task.find = function () {
        return $http.get(baseUrl);
    };

    Task.findById = function (id) {
        return $http.get(baseUrl + '/' + id);
    };

    Task.insert = function (operator) {
        return $http.post(baseUrl, operator);
    };

    Task.update = function (operator) {
        return $http.put(baseUrl + '/' + operator.id, operator)
    };

    Task.delete = function (id) {
        return $http.delete(baseUrl + '/' + id);
    };

    return Task;
});
