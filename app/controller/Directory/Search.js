Ext.define('SFASU.controller.Directory.Search', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			directory: 'directory_main',
			axe: 'directory_main [name=slidebutton]',
			directory_search: 'directory_search',
			searchTerm: '#directory_term',
		},
		control: {
			'directory_search button': {
				tap: 'searchDirectory'
			},
			searchTerm: {
                keyup: 'onSearch'
            },
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
		
		console.log('search: ' + searchTerm);
		
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

				//pageSize: 10,
		        proxy: {
		            type: 'jsonp',
		            url: 'http://library.sfasu.edu/mobile/directory_json.php?search&filter='
							+ searchTerm,

					reader: {
						type: 'json',
						rootProperty: ''
					}
		        }
			}
		});
	}
});
