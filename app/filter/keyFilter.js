(function (){
    'use strict';

    function keyFilter (){
        return function (obj, query) {
            var result = {};
            angular.forEach(obj, function (val, key) {
                if (key !== query) {
                    result[key] = val;
                }
            });
            return result;
        };
    }

    angular.module('sdsTodos').filter('keyFilter', keyFilter);
})();
