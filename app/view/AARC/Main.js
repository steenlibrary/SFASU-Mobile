Ext.define("SFASU.view.AARC.Main", {
    
	extend: 'Ext.navigation.View',
	
    requires: [
        'Ext.TitleBar'
    ],

	xtype: 'aarc_main',
	
    config: {
		items: [{
			xtype: 'tabpanel',
			title: 'AARC Tutoring',
			tabBarPosition: 'bottom',

	        items: [
				{
					xtype: 'aarc_sigroups'
				},
				{
					xtype: 'aarc_walkin'
				},
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
			            	url: 'http://library.sfasu.edu/mobile/directory_json.php?search&filter=aarc',

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
