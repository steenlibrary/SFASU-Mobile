Ext.define('SFASU.controller.AARC.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			AARC: 'aarc_main',
			AARCTabPanel: 'aarc_main tabpanel',
			axe: 'aarc_main [name=slidebutton]'
		},
		control: {
			AARC: {
                pop: 'showAxe'
            },
		}
	},
	
	showAxe: function() {
		console.log(this.getAARCTabPanel().getHidden());
		if(this.getAxe() && ! this.getAARCTabPanel().getHidden()) {
			console.log('show');
			this.getAxe().show();
		}
	}
});
