Ext.define('SFASU.controller.Athletics.Sport.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			//news: 'news',
			homescreen: 'homescreen'
		},
		control: {
			'athletics_sport_news': {
				itemtap: 'showStory',
				//disclose: 'showStory',
			}
		}
	},

	showStory: function(list, index, element, record) {
		console.log('showStory');
	}
});
