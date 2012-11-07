Ext.define('SFASU.controller.Home.Videos', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			
		},
		control: {
			'#videos_carousel': {
				tap: 'videoAction'
			},
		}
	},

	videoAction: function(button, event, eOpts) {
		console.log("videos panel tap");
		//console.log(button.getId());
	}
});
