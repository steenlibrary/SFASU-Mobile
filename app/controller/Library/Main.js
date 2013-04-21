Ext.define('SFASU.controller.Library.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			library: 'library_main',
			libraryTabPanel: 'library_main tabpanel',
			axe: 'library_main [name=slidebutton]'
		},
		control: {
			library: {
                pop: 'showAxe',
				show: 'showLibrary'
            }
		}
	},
	
	showAxe: function() {
		if(this.getAxe() && ! this.getLibraryTabPanel().getHidden()) {
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	showLibrary: function() {
		Ext.getStore('Maps').load({
            scope: this
        });
		
		Ext.getStore('Directory.Departments').load({
            scope: this
        });
    }
});
