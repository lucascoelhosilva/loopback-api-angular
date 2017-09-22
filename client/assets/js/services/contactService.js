'use strict';

app.factory('contactFactory', function($http, config) {

    var baseUrl = config.baseUrl+'/api/v1/contacts';

    var contactFactory = {};

    contactFactory.find = function () {
        return $http.get(baseUrl);
    };

    contactFactory.findById = function (id) {
        return $http.get(baseUrl + '/' + id);
    };

    contactFactory.insert = function (contact) {
        return $http.post(baseUrl, contact);
    };

    contactFactory.update = function (contact) {
        return $http.put(baseUrl + '/' + contact.id, contact)
    };

    contactFactory.delete = function (id) {
        return $http.delete(baseUrl + '/' + id);
    };

    return contactFactory;
});
