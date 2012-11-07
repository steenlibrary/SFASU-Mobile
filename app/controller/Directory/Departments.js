Ext.define('SFASU.controller.Directory.Departments', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			//homescreen: 'homescreen',
			directory: 'directory_main',
			directoryList: 'directory_main directory_list',
			axe: 'directory_main [name=slidebutton]',
		},
		control: {
			'directory_departments': {
				show: 'showDepartments',
				//itemtap: 'showList',
				itemsingletap: 'showList',
				itemdoubletap: 'showList',
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe()) {
			this.getAxe().show();
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide();
		}
	},
	
	showDepartments: function() {
		Ext.getStore('Directory.Departments').load();
	},

	showList: function(list, index, element, record) {
		if(!this.getDirectoryList()) {
			this.hideAxe();
			this.getDirectory().push({
				xtype: 'directory_list',
				title: record.get('department'),
				searchType: 'department',
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
		            	url: 'http://library.sfasu.edu/mobile/directory_json.php?search&filter='
								+ record.get('department'),

						reader: {
							type: 'json',
							rootProperty: 'responseData.feed.entries'
						}
		        	},
					listeners: {
						beforeload: function() {
							//console.log("before load");
			                Ext.Viewport.setMasked({
			                    xtype: 'loadmask'
			                });
			            },
						load: function() {
							// Do some stuff here ...
							Ext.Viewport.setMasked(false);
						}
					}
				}
			});
		}
	}
});
