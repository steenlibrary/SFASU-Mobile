Ext.define('SFASU.controller.Alerts', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			feed: 'feed',
			alerts: 'feed alerts',
			alertButton: 'feed #alertButton',
			axe: 'feed [name=slidebutton]'
		},
		control: {
			'feed #alertButton': {
				tap: 'alertAction'
			},
			feed: {
				show: 'showAlerts'
			},
			'alerts' :{
				show: 'showAlerts',
				//hide: 'showAlertButton'
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe()) {
			this.getAxe().show();
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide();
		}
	},
	
	showAlertButton: function(button, event, eOpts) {
		this.getAlertButton().show();
		//this.getAlertButton().enable();
		
	},
	
	hideAlertButton: function(button, event, eOpts) {
		this.getAlertButton().hide();
		//this.getAlertButton().disable();
	},
	
	showAlerts: function() {
		this.getAlertButton().setBadgeText(false);
	},
	
	alertAction: function(button, event, eOpts) {
		if(!this.getAlerts()) {
			this.hideAxe();
			this.getFeed().push({
				xtype: 'alerts'
			});
		}
	}
});
