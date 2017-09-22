'use strict';

app.factory('userFactory', function($http, config) {

    var baseUrl = config.baseUrl+'/api/v1/users';

    var userFactory = {};

    userFactory.find = function () {
        return $http.get(baseUrl);
    };

    userFactory.findById = function (id) {
        return $http.get(baseUrl + '/' + id);
    };

    userFactory.insert = function (user) {
        return $http.post(baseUrl, user);
    };

    userFactory.update = function (user) {
        return $http.put(baseUrl + '/' + user.id, user)
    };

    userFactory.delete = function (id) {
        return $http.delete(baseUrl + '/' + id);
    };

    return userFactory;
});
