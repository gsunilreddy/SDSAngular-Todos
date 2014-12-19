(function (){
    'use strict';

    function camelCase (){
        return function (input) {
            return input.toLowerCase().replace(/ (\w)/g, function (match, letter) {
                return letter.toUpperCase();
            });
        };
    }

    angular.module('sdsTodos').filter('camelCase', camelCase);
})();
