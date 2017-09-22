'use strict';

app.factory('authFactory', function($http, config) {

    var baseUrl = config.baseUrl+'/api/Usuarios/login';

    var authFactory = {};

    authFactory.getAuth = function () {
        return $http.get(baseUrl);
    };

    authFactory.login = function (auth) {
        return $http.post(baseUrl, auth);
    };

    return authFactory;
});
