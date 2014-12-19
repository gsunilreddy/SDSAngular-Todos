describe('keyFilter', function() {
    'use strict';
    beforeEach(module('sdsTodos'));

	it('should ...', inject(function($filter) {

        var filter = $filter('keyFilter');

		expect(filter(['a', 'b'])).toEqual({ 0 : 'a', 1 : 'b' });

	}));

});
