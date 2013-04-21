Ext.define('SFASU.model.PineLog', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
			//'title',
			{ name: 'title', type: 'string'},
            //'content',
			{ name: 'content', type: 'string'},
            //'link',
			{ name: 'link', type: 'string'},
			{ name: 'author', type: 'string'},
			{ name: 'thumbnail', type: 'string'},
            //'publishedDate'
			{ name: 'publishedDate', type: 'date'}
        ],
		idProperty: 'link'
    }
});