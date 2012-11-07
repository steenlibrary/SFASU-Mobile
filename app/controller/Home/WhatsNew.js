Ext.define('SFASU.controller.Home.WhatsNew', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			
		},
		control: {
			'#whatsnew_carousel': {
				tap: 'whatsNewAction'
			},
		}
	},

	whatsNewAction: function(button, event, eOpts) {
		console.log("whatsNewAction panel tap");
		//console.log(button.getId());
	}
});
