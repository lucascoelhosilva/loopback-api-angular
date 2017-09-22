app.controller('userController', ['$scope', 'userFactory', '$location',  function ($scope, userFactory, $location) {

    $scope.users = null;
    $scope.message = null;

    var getUsers = function() {
        userFactory.find()
            .success(function (data) {
                $scope.users = data;
            })
            .error(function (error) {
                $scope.message = "Error..."+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    $scope.save = function(user) {
        userFactory.insert(user)
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
