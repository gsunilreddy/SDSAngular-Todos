(function (){
    'use strict';

    function unsafe ($sce) { return $sce.trustAsHtml; }

    angular.module('sdsTodos').filter('unsafe', unsafe);
})();
