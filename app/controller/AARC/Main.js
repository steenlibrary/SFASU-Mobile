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
                pop: 'showAxe',
				show: 'showAARC'
            }
		}
	},
	
	showAxe: function() {
		if(this.getAxe() && ! this.getAARCTabPanel().getHidden()) {
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	showAARC: function() {
		Ext.getStore('Maps').load({
            scope: this
        });
		
		Ext.getStore('Directory.Departments').load({
            scope: this
        });
    }
	
});
