Ext.define('SFASU.controller.Home.News', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homescreen_news: 'homescreen_news',
			news_carousel: '#news_carousel',
			el: 'el'
		},
		control: {
			'#news_carousel panel': {
				tap: {
					//element: 'element',
					fn: 'newsAction'
				},
				//activate: 'newsAction'
				
			},
		}
	},
	
	launch: function() {
		console.log('homescreen_news launch');
	},

	newsAction: function(button, event, eOpts) {
		
		console.log("news panel tap2");
		console.log(button);
		//console.log(button.getId());
		alert('news panel tap');
	}
});
