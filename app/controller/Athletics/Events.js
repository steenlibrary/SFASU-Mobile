Ext.define('SFASU.controller.Athletics.Events', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			athleticsEvents: 'athletics_events',
			homescreen: 'homescreen'
		},
		control: {
			'athletics_events': {
				itemsingletap: 'showEvent',
				itemdoubletap: 'showEvent'
			}
		}
	},

	showEvent: function(list, index, element, record) {
		if(!this.getAthleticsEvents()) {
			this.getHomescreen().push({
				xtype: 'panel',
				title: record.get('title'),
				html: record.get('title') + '<br /><br />' + record.get('content'),
				scrollable: true,
				styleHtmlContent: true
			});
		}
	}
});
