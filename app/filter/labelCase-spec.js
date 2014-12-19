describe('labelCase', function() {
    'use strict';
    beforeEach(module('sdsTodos'));

	it('should ...', inject(function($filter) {

        var filter = $filter('labelCase');

		expect(filter('inputTest')).toEqual('Input Test');

	}));

});
