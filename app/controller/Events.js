Ext.define('SFASU.controller.Events', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			events: 'events',
			event: 'events panel',
			eventsList: 'events list',
			axe: 'events [name=slidebutton]'
		},
		control: {
			events: {
				show: 'showEvents',
				pop: 'showAxe',
				//push: 'hideAxe'
			},
			'events list': {
				itemtap: 'showEvent',
				show: 'hideBadge'
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe() && ! this.getEventsList().getHidden()) {
			this.getAxe().show();
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide();
		}
	},
	
	showEvents: function() {
		Ext.getStore('Events').load();
	},
	
	hideBadge: function() {
		//Ext.getCmp('events').setBadgeText(false);
	},

	showEvent: function(list, index, element, record) {
		if(!this.getEvent()) {
			this.hideAxe();
			this.getEvents().push({
				xtype: 'panel',
				title: record.get('title'),
				html: '<h3>' + record.get('title') + '</h3>' 
					+ Ext.Date.format(record.get('date'), 'l, F j, Y') 
					+ '<br/><br/>'
					+ record.get('content'),
				scrollable: true,
				styleHtmlContent: true
			});
		}
	}
});
