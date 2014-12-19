(function () {
    'use strict';

    angular.module('sdsTodos')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/todos', {
                    templateUrl: 'partial/todos/todos.html',
                    controller: 'TodosCtrl',
                    controllerAs: "vm",
                    title: ''
                });
        }]);

})();
