Ext.define('SFASU.controller.Home.Screen01', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homescreen: 'homescreen',
			screen01: 'screen01',
			screen02: 'screen02',
			//homescreenToolbar: 'homescreen toolbar',
			homeLogo: 'homescreen #homeLogo'
		},
		control: {
			'screen01 button': {
				tap: 'buttonAction'
			},
			'screen02 button': {
				tap: 'buttonAction'
			},
			'screen01 image': {
				tap: 'buttonAction'
			},
		}
	},

	buttonAction: function(button, event, eOpts) {
		console.log(button.getId());
		this.getHomeLogo().hide();
		this.getHomescreen().push({
			xtype: button.getId(),
			showAnimation: 'fadeIn',
		});
		
		/*Ext.Viewport.push({
	         xtype:  button.getId() 
	     });
	*/
		console.log(this.getHomescreen().getNavigationBar());
		//this.getHomescreen().getNavigationBar().show();
		//this.getHomescreenToolbar().hide();
			/*
			this.getHomescreen().getNavigationBar().config.backButton.setIconCls('home');
			this.getHomescreen().getNavigationBar().config.backButton.setIconMask(true);
			this.getHomescreen().getNavigationBar().config.backButton.setUi('plain');
			this.getHomescreen().getNavigationBar().config.backButton.setText('');
			*/
	}
});
