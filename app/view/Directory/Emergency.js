Ext.define('SFASU.view.Directory.Emergency', {
	extend: 'Ext.List',
	xtype: 'directory_emergency',
	
	requires: [
        'Ext.List',
    ],
	
	config: {
		title: 'Emergency Info',
		iconCls: 'warning_black',
		
		itemTpl: '{type}',
		
		onItemDisclosure: true,

        store: {
			autoLoad: true,
			fields: ['type', 'phone'],
			data: [
				{
					type: 'Police Emergency', 
					phone: '911',
					iconCls: 'phone1',
					iconMask: true
				},
				{
					type: 'Fire Emergency',
					phone: '911'
				},
				{
					type: 'Police Non-Emergency',
					phone: '936.468.2608'
				},
				{
					type: 'Police Administration',
					phone: '936.468.2252'
				},
				{
					type: 'Permits and Citations',
					phone: '936.468.2615'
				}
		    ]
		}
	}
});