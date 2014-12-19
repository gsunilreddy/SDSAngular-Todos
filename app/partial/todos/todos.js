(function (){
    'use strict';
    function TodosCtrl (){
        var vm = this;
    }

    angular.module('sdsTodos')
        .controller('TodosCtrl', function ($scope) {
            $scope.todos = [];
            $scope.addTodo = function () {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            };
            $scope.removeTodo = function (index) {
                $scope.todos.splice(index, 1);
            };
        });

})();
