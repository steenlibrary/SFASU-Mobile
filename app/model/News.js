Ext.define('SFASU.model.News', {
    extend: 'Ext.data.Model',

	requires: ['Ext.DateExtras'],

    config: {
        fields: [
            //'title',
			{ name: 'title', type: 'string'},
            //'content',
			{ name: 'content', type: 'string'},
            //'link',
			{ name: 'link', type: 'string'},
			{ name: 'image', type: 'string'},
			{ name: 'thumbnail', type: 'string'},
			{ name: 'width', type: 'string'},
			{ name: 'height', type: 'string'},
            //'publishedDate'
			//{ name: 'publishedDate', type: 'string', //dateFormat: 'm/d/Y' },
			{ name: 'publishedDate', type: 'date'},
        ],
		idProperty: 'link'
    }
});