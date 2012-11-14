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
				pop: 'showAxe'
			},
			'events list': {
				itemtap: 'showEvent'
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

	showEvent: function(list, index, element, record) {
		if(!this.getEvent()) {
			this.hideAxe();
			this.getEvents().push({
				xtype: 'panel',
				title: record.get('title'),
				html: '<h3>' + record.get('title') + '</h3>' 
					+ '<p class="calendar-large">'
					+ Ext.Date.format(record.get('date'), 'j') 
					+'<em>' + Ext.Date.format(record.get('date'), 'M')  + '</em></p>'
					+ '<p style="padding: 10px;">'
					+ Ext.Date.format(record.get('date'), 'l, F j, Y') 
					+ '<br/><br/>'
					+ record.get('content') + '</p>',
				scrollable: true,
				styleHtmlContent: true
			});
		}
	}
});
