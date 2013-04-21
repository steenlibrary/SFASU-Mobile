Ext.define('SFASU.controller.Directory.Departments', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			directory: 'directory_main',
			directoryList: 'directory_main directory_list',
			axe: 'directory_main [name=slidebutton]'
		},
		control: {
			'directory_departments': {
				show: 'showDepartments',
				itemtap: 'showList'
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe()) {
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
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

		        	proxy: {
		            	type: 'jsonp',
		
		            	url: serverPath,
								
						extraParams: {
							feature: 'directory',
							search: 'true',
							filter: record.get('department')
						},

						reader: {
							type: 'json',
							rootProperty: ''
						}
		        	}
				}
			});
		}
	}
});
