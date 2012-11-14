Ext.define('SFASU.model.News', {
    extend: 'Ext.data.Model',

	requires: ['Ext.DateExtras'],

    config: {
        fields: [
			{ name: 'title', type: 'string'},
			{ name: 'content', type: 'string'},
			{ name: 'link', type: 'string'},
			{ name: 'image', type: 'string'},
			{ name: 'thumbnail', type: 'string'},
			{ name: 'width', type: 'string'},
			{ name: 'height', type: 'string'},
			{ name: 'publishedDate', type: 'date'},
        ],
		idProperty: 'link'
    }
});