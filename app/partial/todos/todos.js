(function (){
    'use strict';
    function TodosCtrl (){
        var vm = this;
    }

    angular.module('sdsTodos')
        .controller('TodosCtrl', function ($scope, localStorageService) {
            
            var todosInStore = localStorageService.get('todos');

            $scope.todos = todosInStore || [];

            $scope.$watch('todos', function () {
                localStorageService.set('todos', $scope.todos);
            }, true);

            $scope.addTodo = function () {
                $scope.todos.push($scope.todo);
                $scope.todo = '';
            };

            $scope.removeTodo = function (index) {
               $scope.todos.splice(index, 1);
            };
        });

})();
