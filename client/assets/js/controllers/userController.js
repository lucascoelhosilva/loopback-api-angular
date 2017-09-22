app.controller('userController', ['$scope', 'Usuario', '$location',  
    function ($scope, Usuario, $location) {

    $scope.user = null;
    $scope.message = null;

    var getUsers = function() {
        Usuario.find()
            .success(function (data) {
                $scope.user = data;
            })
            .error(function (error) {
                $scope.message = "Error..."+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    $scope.save = function(user) {
        Usuario.insert(user)
            .success(function (data) {
                $scope.list();
            })
            .error(function (error) {
                $scope.message = "Error..."+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    $scope.data = function(){
        $location.path('user-data');
    };

    $scope.list = function(){
        $location.path('user');
    };

    getUsers();
}]);
