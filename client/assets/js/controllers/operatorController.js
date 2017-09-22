app.controller('operatorController', ['$scope', 'operatorFactory', '$location',  function ($scope, operatorFactory, $location) {

    $scope.operators = null;
    $scope.message = null;

    var getOperators = function() {
        operatorFactory.find()
            .success(function (data) {
                $scope.operators = data;
            })
            .error(function (error) {
                $scope.message = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    $scope.save = function(operator) {
        operatorFactory.insert(operator)
            .success(function (data) {
                $scope.list();
            })
            .error(function (error) {
                $scope.message = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    $scope.data = function(){
        $location.path('operator-data');
    };

    $scope.list = function(){
        $location.path('operator');
    };

    getOperators();
}]);
