app.controller('authController', ['$scope', 'authFactory', '$location',   function ($scope, Usuario, $location) {

    $scope.contacts = null;
    $scope.message = null;

    $scope.login = function (user) {
        Usuario.login(user).success(function (data) {
            $.jStorage.set('accessToken', data.id);
            console.log(data);
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