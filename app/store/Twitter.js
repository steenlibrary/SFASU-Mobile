Ext.define('SFASU.store.Twitter', {
    extend: 'Ext.data.Store',
	
	requires: ['Ext.DateExtras', 'Ext.Date'],

    config: {
		//model: 'SFASU.model.News',
		fields: [
			'id', 
			'id_str', 
			'from_user', 
			'profile_image_url', 
			'text', 
			//'created_at',
			{ name: 'created_at', type: 'date'}, 
			'source'
		],
        autoLoad: true,

		grouper: {
			sortProperty: 'created_at',
			direction: 'DESC',
            groupFn: function(record) {
				return Ext.Date.format(record.get('created_at'), 'g:i a l, F j, Y');
            }
        },

		pageSize: 10,
        proxy: {
            type: 'jsonp',

			//url : 'https://api.twitter.com/1/statuses/user_timeline.json?'
			//	+'include_entities=true&include_rts=true&screen_name=sfasu',
			url : 'http://search.twitter.com/search.json?q='
				+ 'from:' + 'sfasu'
				+ '%20OR%20'
				+ 'from:' + 'steenlibrary'
				+ '%20OR%20'
				+ 'from:' + 'JackText'
				+ '&amp;result_type=mixed',
			
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
        },

		listeners: {
			load: function(store, data, eOpts) {
				var feedStore = Ext.getStore('Home.Feed');
				console.log('twitter loaded');
				
				var items = [];
				var limit = 5;

				Ext.each(data, function(tweet, index) {
					if(index >= limit) {
						return;
					}
					
					var url = 'http://twitter.com/' 
						+ tweet.get('from_user')
						+ '/status/' 
						+ tweet.get('id_str');
						
					feedStore.add({ 
						//id: 'twitter_' + tweet.get('id_str'),
						title: '@' + tweet.get('from_user') + ': <br/>'
							+ '<h3>' 
							+ Ext.String.ellipsis(
								tweet.get('text'), 
								85, 	// Max character length
								true	// Common word break
								)
					 		+ '</h3>',
						image: tweet.get('profile_image_url'),
						publishedDate: tweet.get('created_at'),
						link: url,
						type: 'twitter'
					});
					
					feedStore.sync();
					/*
					var image = tweet.get('profile_image_url');
					
					var style = {
						'background-image':'url("resources/images/twitter-icon.png")',
						'background-repeat':'no-repeat',
						'background-position':'center center',
						'background-size': '150%',
						'color': '#fff'
					};
					
					items.push({
						xtype: 'panel',
						//cls: 'feedTwitter',
						style: style,
						scrollable: false,
						
						items:[{
							xtype: 'panel',
							cls: 'homeCaption',
							html: '<img src="' + tweet.get('profile_image_url') + '" style="float: left; padding-right: 3px;"/> '
								+ '@' + tweet.get('from_user') + ': <br/>'
								+ '<h3>' 
								+ Ext.String.ellipsis(
									tweet.get('text'), 
									100, 	// Max character length
									true	// Common word break
									)
							 	+ '</h3>'
						}],
						listeners: {
						    tap: {
						        fn: function() {
									console.log('twitter panel tap');
									var url = 'http://twitter.com/' 
										+ tweet.get('from_user')
										+ '/status/' 
										+ tweet.get('id_str');
									Ext.util.openLink(url);
								},
						        element: 'element'
						    }
						}
					});
					*/
				});
				//Ext.getCmp('social_carousel').setItems(items);
				//Ext.getCmp('social_carousel').setActiveItem(0);
			}
		}
    }
});