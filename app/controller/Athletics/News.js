Ext.define('SFASU.controller.Athletics.News', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			athletics: 'athletics_main',
			athletics_news: 'athletics_news',
			homescreen: 'homescreen'
		},
		control: {
			'athletics_news': {
				itemtap: 'showStory',
				//disclose: 'showStory',
			}
		}
	},

	showStory: function(list, index, element, record) {
		this.getAthletics().push({
			xtype: 'panel',
			title: record.get('title'),
			html: '<h3>' + record.get('title') + '</h3>' 
				+ Ext.Date.format(record.get('publishedDate'), 'l, F j, Y') 
				+ '<br/><br/>'
				+ '<img style="float: right;" src="' + record.get('image') + '" width="50%"/>'
				+ record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	}
});
