(function (){
    'use strict';
    angular.module('sdsTodos', [
        'ui.bootstrap',
        'ui.utils',
        'ngRoute',
        'ngAnimate',
        'LocalStorageModule'
    ]);

    angular.module('sdsTodos').config(function($routeProvider) {

        /* Add New Routes Above */
        $routeProvider.otherwise({redirectTo:'/'});

    });

    angular.module('sdsTodos').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            if (current.$$route && current.$$route.title) {
                $rootScope.title = current.$$route.title;
            }else{
                $rootScope.title = 'sdsTodos';
            }
        });

    });

})();
