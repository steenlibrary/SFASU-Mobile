Ext.define('SFASU.controller.Library.Catalog', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			library: 'library_main',
			library_catalog: 'library_catalog',
			searchTerm: 'library_catalog [name=term]',
			searchLimit: 'library_catalog [name=limit]',
			axe: 'library_main [name=slidebutton]'
		},
		control: {
			'library_catalog button': {
				tap: 'searchCatalog'
			},
			'library_catalog': {
				submit: 'searchCatalog'
			},
			searchTerm: {
                keyup: 'onSearch'
            },
		}
	},
	
	showAxe: function() {
		if(this.getAxe() && ! this.getLibrary().getHidden()) {
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
            //fire the search action with the current value of the searchField
            //this.fireAction('search', [searchField.getValue()], 'doSearch');
			//alert('search');
			this.searchCatalog();
        }
    },

	searchCatalog: function() {
		var searchTerm = this.getSearchTerm().getValue();
		var searchLimit = this.getSearchLimit().getValue();
		var searchUrl = 'http%3A%2F%2Flibrary.sfasu.edu%2Ffind%2FSearch%2FResults%3Flookfor%3D'
			+ searchTerm + '%26type%3D' + searchLimit + '%26view%3Drss';
		/*
		var searchUrl = 'http://library.sfasu.edu/find/Search/Results?'
			+ 'lookfor=' + searchTerm
			+ '&type=' + searchLimit
			+ '&view=rss';
		var searchUrlEncoded = encodeURIcomponent(searchUrl);
		console.log(searchUrlEncoded);
		*/
		this.hideAxe();
		this.getLibrary().push({
			xtype: 'list',
			title: 'Search Results',
			store: {
				autoLoad: true,
				fields: ['id','title', 'content', 'link', 'publishedDate', 'author'],
				proxy: {
		            type: 'jsonp',
		            url: 'https://ajax.googleapis.com/ajax/services/feed/load?num=50&v=1.0&q='
							+ searchUrl,

					reader: {
						type: 'json',
						rootProperty: 'responseData.feed.entries'
					}
		        }
			},
			
			plugins: [
	            { type: 'listpaging' },
	            { type: 'pullrefresh' }
	        ],
	
			onDisclosure: true,
	
			listeners: {
				select: function(view, record) {
					Ext.util.openLink(record.get('link'));
				}
			},

	        emptyText: '<p class="no-searches">Your search did not match any resources.</p>',
			onItemDisclosure: true,
	        itemTpl: '{title}<br/> {author}'
		});
	}
});
