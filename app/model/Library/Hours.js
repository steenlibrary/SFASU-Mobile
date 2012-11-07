Ext.define('SFASU.model.Library.Hours', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'title',
            'content',
            'link',
            'publishedDate'
        ],
		idProperty: 'title'
    }
});