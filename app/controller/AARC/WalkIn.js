Ext.define('SFASU.controller.AARC.WalkIn', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			aarc: 'aarc_main',
		},
		control: {
			'aarc_walkin': {
				show: 'showTables',
			}
		}
	},
	
	showTables: function() {
		Ext.getStore('AARC.WalkIn').load();
	}
});
