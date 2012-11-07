Ext.define('SFASU.controller.Home.Athletics', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			
		},
		control: {
			'#athletics_carousel': {
				tap: 'athleticsAction'
			},
		}
	},

	athleticsAction: function(button, event, eOpts) {
		console.log("athletics panel tap");
		//console.log(button.getId());
	}
});
