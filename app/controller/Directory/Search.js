Ext.define('SFASU.controller.Directory.Search', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			directory: 'directory_main',
			axe: 'directory_main [name=slidebutton]',
			directory_search: 'directory_search',
			directoryList: 'directory_main directory_list',
			searchTerm: '#directory_term'
		},
		control: {
			'directory_search button': {
				tap: 'searchDirectory'
			},
			searchTerm: {
                keyup: 'onSearch'
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
	
	onSearch: function(field, e) {
        var keyCode = e.event.keyCode,
            searchField = this.getSearchTerm();

        //the return keyCode is 13.
        if (keyCode == 13) {
			this.searchDirectory();
        }
    },

	searchDirectory: function() {
		var searchTerm = this.getSearchTerm().getValue();
		
		if (searchTerm == '') {
			searchTerm = 'Pattillo';
		}
		
		console.log(searchTerm);
		
		if(!this.getDirectoryList()) {
			//console.log('getDirectoryList');
			this.hideAxe();
			this.getDirectory().push({
				xtype: 'directory_list',
				title: 'Search Results',
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
							filter: searchTerm
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
