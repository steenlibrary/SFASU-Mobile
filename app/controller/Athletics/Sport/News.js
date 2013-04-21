Ext.define('SFASU.controller.Athletics.Sport.News', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			athletics: 'athletics_main',
			homescreen: 'homescreen'
		},
		control: {
			'athletics_sport_news': {
				itemtap: 'showStory'
			}
		}
	},

	showStory: function(list, index, element, record) {
		this.getAthletics().push({
			xtype: 'panel',
			title: record.get('title'),
			
			scrollable: true,
			styleHtmlContent: true,
			
			items: [{
				html: '<h3>' + record.get('title') + '</h3>'
					+ Ext.Date.format(record.get('publishedDate'), 'l, F j, Y') 
					+ '<br/><br/>'
				 	//+ '<img style="float: right;" src="' + record.get('image') + '" width="50%"/>'
					+ record.get('content')
			},{
				xtype: 'button',
				text: 'View Full Article',
					
				handler: function() {
					openLink(record.get('link'));
				}
			}]
		});
	}
});
