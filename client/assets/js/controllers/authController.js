app.controller('authController', ['$scope', 'authFactory', '$location', 'LoopBackAuth', 
    function ($scope, Usuario, $location, LoopBackAuth) {

    $scope.contacts = null;
    $scope.message = null;

    $scope.login = function (user) {
        Usuario.login(user).success(function (data) {
            LoopBackAuth.setUser(data.id, data.userId, data.user);
            $.jStorage.set('accessToken', data.id);

            delete $scope.message;
            $location.path('/');
        }).error(function (data, status) {
            $.jStorage.set('accessToken', null);
            if (status == 401)
                $scope.message = "Usuário Inválido.";
            else
                $scope.message = "Aconteceu um problema: " + data.message;
        });
    };
}]);