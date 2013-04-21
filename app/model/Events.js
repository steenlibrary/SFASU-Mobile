Ext.define('SFASU.model.Events', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            //'title',
			{ name: 'title', type: 'string'},
            //'content',
			{ name: 'content', type: 'string'},
            //'link',
			{ name: 'link', type: 'string'},
            //'publishedDate'
			{ name: 'date', type: 'date' }
        ],
		idProperty: 'link'
    }
});