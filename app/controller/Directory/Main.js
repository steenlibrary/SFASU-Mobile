Ext.define('SFASU.controller.Directory.Main', {
	extend: 'Ext.app.Controller',

	config: {
		stores: ['Directory.Departments'],
		refs: {
			directory: 'directory_main',
			directoryTabPanel: 'directory_main tabpanel',
			directorySearch: 'directory_search',
			axe: 'directory_main [name=slidebutton]'
		},
		control: {
			directory: {
				pop: 'showAxe',
				show: 'showDirectory'
				//push: 'hideAxe'
			},
			'directory_emergency button': {
				singletap: 'buttonAction',
				doubletap: 'buttonAction'
			},
			directorySearch: {
				//show: 'showAxe',
				//hide: 'hideAxe'
			},
		}
	},
	
	showAxe: function() {
		//console.log(this.getDirectoryTabPanel().getHidden());
		if(this.getAxe() && ! this.getDirectoryTabPanel().getHidden()) {
			//console.log('show');
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
		}
	},
	
	showDirectory: function() {
		Ext.getStore('Maps').load({
            scope: this
        });

		Ext.getStore('Directory.Departments').load({
            scope: this
        });

        Ext.getStore('Directory.Favorites').load({
            callback: this.onFavoritesStoreLoad,
            scope: this
        });
    },

	onFavoritesStoreLoad: function() {
        var search = Ext.getStore('Directory.Favorites').getAt(0);

        if (search) {
            console.log(search);
        }
    },

	buttonAction: function(button, event, eOpts) {
		//this.getHomescreen().push({
		//	xtype: button.getId()
		//});
		alert('test');
	}
});
