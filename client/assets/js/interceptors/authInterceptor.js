app.factory('authInterceptor', function($q, $location) {

    var authInterceptor = {

        request: function(config){

            var token = $.jStorage.get('accessToken');

            if (config.url == 'partials/auth.html')
              $.jStorage.set('accessToken', null);

            if(token)
              config.headers.accessToken = 'Bearer ' + token;
            else
              $location.path('/auth');

            return config;
        },

        responseError: function(resposta) {
            if (resposta.status == 401) {
              $location.path('/auth');
            }
            console.log(resposta.status)
            return $q.reject(resposta);
        }
    }

    return authInterceptor;
});
