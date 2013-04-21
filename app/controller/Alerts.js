Ext.define('SFASU.controller.Alerts', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			feed: 'feed',
			alerts: 'slidenavigationview alerts',
			alertsList: 'slidenavigationview alerts list',
			alert: 'slidenavigationview alerts panel',
			
			alertsModal: '[name=alerts_modal]',
			alertsModalList: '[name=alerts_modal] list',
			alertModal: '[name=alerts_modal] panel',
			
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
			alerts: {
				show: 'showAlerts'
			},
			alertsList: {
				itemtap: 'showAlert'
			},
			alertsModalList: {
				itemtap: 'showAlertModal'
			}
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
		}
	},
	
	showAlertButton: function(button, event, eOpts) {
		this.getAlertButton().show({type: 'fadeIn'});
	},
	
	hideAlertButton: function(button, event, eOpts) {
		this.getAlertButton().hide();
	},
	
	showAlerts: function() {
		this.getAlertButton().setBadgeText(false);
	},
	
	showAlert: function(list, index, element, alert) {
		if(!this.getAlert()) {
			this.hideAxe();
			this.getAlerts().push({
				xtype: 'panel',
				title: 'Campus Alert',
				html: '<h3>' + alert.get('headline') + '</h3>'
					+ '<p>' + alert.get('message') +'</p>',
				scrollable: true,
				styleHtmlContent: true
			});
		}
	},
	
	showAlertModal: function(list, index, element, alert) {
		if(!this.getAlertModal()) {
			this.getAlertsModal().push({
				xtype: 'panel',
				title: 'Campus Alert',
				html: '<h3>' + alert.get('headline') + '</h3>'
					+ '<p>' + alert.get('message') +'</p>',
				scrollable: true,
				styleHtmlContent: true
			});
		}
	},
	
	alertAction: function(button, event, eOpts) {
		if(!this.getAlerts() && Ext.os.is.Phone) {
			this.hideAxe();
			this.getFeed().push({
				xtype: 'alerts'
			});
		} else {
			
			if(this.getAlertsModal()) {
				this.getAlertsModal().show(true);
			} else {
				var alert = Ext.Viewport.add({
					xtype: 'alerts',
					name: 'alerts_modal',
					modal: true,
					hideOnMaskTap: true,
					centered: true,
					width: 400,
					height: 400,
					style: 'background:white'
				});
				alert.show();
			}
		}
	}
});
