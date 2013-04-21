Ext.define('SFASU.model.Library.Hours', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
			{ name: 'hours', type: 'string'},
			{ name: 'date', type: 'date'}
        ],
		idProperty: 'title'
    }
});