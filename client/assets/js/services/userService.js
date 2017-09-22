'use strict';

app.factory('Usuario', function($http, config) {

    var baseUrl = config.baseUrl+'/api/Usuarios';

    var Usuario = {};

    Usuario.find = function () {
        return $http.get(baseUrl);
    };

    Usuario.findById = function (id) {
        return $http.get(baseUrl + '/' + id);
    };

    Usuario.insert = function (user) {
        return $http.post(baseUrl, user);
    };

    Usuario.update = function (user) {
        return $http.put(baseUrl + '/' + user.id, user)
    };

    Usuario.delete = function (id) {
        return $http.delete(baseUrl + '/' + id);
    };

    return Usuario;
});
