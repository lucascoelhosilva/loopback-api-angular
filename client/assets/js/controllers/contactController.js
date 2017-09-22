app.controller('contactController', ['$scope', 'contactFactory', 'operatorFactory', '$location',  function ($scope, contactFactory, operatorFactory, $location) {

    $scope.contacts = null;
    $scope.operators = null;
    $scope.message = null;

    var getContacts = function() {
        contactFactory.find()
            .success(function (data) {
                $scope.contacts = data;
            })
            .error(function (error) {
                $scope.message = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    var getOperators = function(contact) {
        operatorFactory.find()
            .success(function (data) {
                $scope.operators = data;
            })
            .error(function (error) {
              $scope.message = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    $scope.save = function(contact) {
        var operator = contact.operator;

        delete contact.operator;

        contact.operator = operator.id;

        contactFactory.insert(contact)
            .success(function (data) {
                $scope.list();
            })
            .error(function (error) {
                $scope.message = "Ocorreu um problema: "+ error.message;
                console.log("Error..."+ error.message);
            });
    };

    $scope.data = function(){
        $location.path('contact-data');
    };

    $scope.list = function(){
        $location.path('contact');
    };

    getOperators();
    getContacts();
}]);
