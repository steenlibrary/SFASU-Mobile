Ext.define('SFASU.model.Directory.Departments', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
			'department', 
			'key',
			'building'
		],
		idProperty: 'key'
    }
});