Ext.define('SFASU.controller.Home.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			axe: 'directory_main [name=slidebutton]'
		},
		control: {
			'homescreen button': {
				//singletap: 'buttonAction',
				//doubletap: 'buttonAction'
			},
			'homescreen screen01': {
				//show: 'showHomeScreen',
			},
			
		}
	},
	
	showHomeScreen: function() {
		console.log("show home screen");
		
		this.getHomeLogo().show();
		//this.getHomescreenCarousel().setActiveItem(1);
		this.getHomescreen().getNavigationBar().setTitle('');
	},

	buttonAction: function(button, event, eOpts) {
		this.getHomescreen().getNavigationBar().setTitle('Home');
		this.getHomescreen().push({
			xtype: button.getId()
		});
	}
});
