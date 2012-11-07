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
                pop: 'showAxe'
            },
		}
	},
	
	showAxe: function() {
		console.log(this.getLibraryTabPanel().getHidden());
		if(this.getAxe() && ! this.getLibraryTabPanel().getHidden()) {
			console.log('show');
			this.getAxe().show();
		}
	}
});
