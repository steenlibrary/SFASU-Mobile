Ext.define("SFASU.view.Library.Main", {
    
	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.TitleBar',
    ],

	xtype: 'library_main',
	
    config: {
		items: [{
			xtype: 'tabpanel',
			title: 'Steen Library',

			tabBarPosition: 'bottom',

	        items: [
				{
					xtype: 'library_catalog'
				},
				{
					xtype: 'library_account'
				},
				{
					xtype: 'library_hours'
				},
				/*
				{
					xtype: 'library_map'
				},
				*/
				{
					xtype: 'directory_list',
					title: 'Staff',
					iconCls: 'user_list2',
					store: {
			        	model: 'SFASU.model.Directory.Person',
						autoLoad: true,
			        	sorters: 'lastname',

			        	grouper: {
			            	groupFn: function(record) {
			                	return record.get('lastname')[0];
			            	}
			        	},

			        	proxy: {
			            	type: 'jsonp',
			            	url: 'http://library.sfasu.edu/mobile/directory_json.php?search&filter=library',

							reader: {
								type: 'json',
								rootProperty: ''
							}
			        	}
					}
				}
	        ]
		}]
    }
});
