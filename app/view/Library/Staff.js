Ext.define('SFASU.view.Library.Staff', {
	extend: 'Ext.Panel',
	xtype: 'library_staff',
	
	config: {
		title: 'Staff',
		iconCls: 'user_list2',
		layout: {
		        type: 'hbox',
		        align: 'start',
		        pack: 'start'
		    },
		items: [
			{
				xtype: 'directory_list',
				store: {
		        	model: 'SFASU.model.Directory.Person',
					autoLoad: true,
		        	sorters: 'lastname',

		        	grouper: {
		            	groupFn: function(record) {
		                	return record.get('lastname')[0];
		            	}
		        	},

					//pageSize: 10,
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
	}
});