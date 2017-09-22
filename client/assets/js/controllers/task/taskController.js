app.controller('taskController', ['$scope', 'Task', '$location',  
    function ($scope, Task, $location) {
    
    $scope.message = null;

    $scope.getTasks = function () {
        Task.find().success(function (data) {
            $scope.tasks = data;
        })
    };
    $scope.getTasks();


    $scope.save = function(task) {
        task.date = new Date();
        task.usuarioId = 1;
        Task.insert(task)
            .success(function (results) {
                $scope.getTasks();
                $scope.task = "";
            })
            .error(function (error) {
                $scope.message = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

}]);
    