Ext.define('SFASU.controller.Athletics.Sport.Schedule', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			athletics: 'athletics_main',
			homescreen: 'homescreen'
		},
		control: {
			'athletics_sport_schedule': {
				//itemtap: 'showStory',
				//disclose: 'showStory',
			}
		}
	},

	showStory: function(list, index, element, record) {
		this.getAthletics().push({
			xtype: 'panel',
			title: record.get('title'),
			html: record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	}
});
