Ext.define('SFASU.view.Directory.Person.Contact', {

	extend: 'Ext.List',
	xtype: 'directory_person_contact',

	config: {
		onItemDisclosure: true,
		store: {
			autoLoad: true,
			fields: ['type', 'data'],
			data: []
		},
		itemTpl: '{type}: {data}'
	}
});
