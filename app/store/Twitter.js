Ext.define('SFASU.store.Twitter', {
    extend: 'Ext.data.Store',
	
	requires: ['Ext.DateExtras', 'Ext.Date'],

    config: {
	
		fields: [
			//'id', 
			'id_str', 
			'from_user', 
			'profile_image_url', 
			'text',
			{ name: 'created_at', type: 'date'}, 
			'source'
		],
		
		idProperty: 'id_str',
		
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
					
					if(feedStore.findRecord('link', url)) {
						return;
					}
					
					if(Ext.os.is.Phone) {
						var title = Ext.String.ellipsis(
							tweet.get('text'), 
							85, 	// Max character length
							true	// Common word break
						);
					} else {
						var title = tweet.get('text');
					}
							
					feedStore.add({ 
						//id: 'twitter_' + tweet.get('id_str'),
						title: title,
						postedBy: tweet.get('from_user'),
						image: tweet.get('profile_image_url'),
						publishedDate: tweet.get('created_at'),
						link: url,
						type: 'twitter'
					});
					
					feedStore.sync();
				});
			}
		}
    }
});