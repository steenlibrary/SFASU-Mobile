Ext.define('SFASU.model.Athletics.Sport.News', {
    extend: 'Ext.data.Model',

	requires: ['Ext.DateExtras'],

    config: {
        fields: [
				'id',
				'title', 
				'content', 
				'link', 
				//'publishedDate'
				//'image',
				{ name: 'publishedDate', type: 'date'},
        ],
		idProperty: 'link'
    }
});