Ext.define('SFASU.view.Directory.General', {
	extend: 'Ext.List',
	xtype: 'directory_general',
	
	config: {
		title: 'General',
		iconCls: 'info',
		
		defaults: {
			iconCls: 'phone1',
			iconMask: true
		},
		
		itemTpl: '{type}',
		
		onItemDisclosure: true,

        store: {
			autoLoad: true,
			fields: ['type', 'phone'],
			data: [{
				type: 'General Information', 
				phone: '936.468.3401'
			},{
				type: 'Admissions',
				phone: '936.468.2504'
			},{
				type: 'Financial Aid',
				phone: '936.468.2403'
			},{
				type: 'Business Office',
				phone: '936.468.6960'
			},{
				type: 'Technical Support',
				phone: '936.468.4357'
			},{
				type: 'Registrar',
				phone: '936.468.2501'
			},{
				type: 'Residence Life',
				phone: '936.468.2601'
			},{
				type: 'Permits and Citations',
				phone: '936.468.2615'
			}]
		}
	}
});