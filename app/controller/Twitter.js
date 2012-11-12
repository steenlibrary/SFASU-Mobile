Ext.define('SFASU.controller.Twitter', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			twitter: 'twitter',
			tweet: 'social panel',
			social: 'social',
			axe: 'social [name=slidebutton]'
		},
		control: {
			twitter: {
				itemtap: 'showTweet'
			},
			social: {
				pop: 'showAxe'
			}
		}
	},
	
	showAxe: function() {
		if(this.getAxe()) {
			this.getAxe().show();
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide();
		}
	},
	
	onTwitterTap: function(list, idx, el, tweet) {
		var url = 'http://twitter.com/' 
			+ tweet.get('from_user')
			+ '/status/' 
			+ tweet.get('id_str');
		Ext.util.openLink(url);
	},
	
	showTweet: function(list, index, element, tweet) {
		if(!this.getTweet()) {
			this.hideAxe();
			this.getSocial().push({
				xtype: 'panel',
				title: '@' + tweet.get('from_user'),
				html: '<img src="' + tweet.get('profile_image_url') + '" style="float: left; padding-right: 5px;" />'
					+ '<h3>' + tweet.get('text') + '</h3>'
					+ 'Posted: ' + Ext.Date.format(tweet.get('created_at'), 'g:i a l, F j, Y'),
				scrollable: true,
				styleHtmlContent: true
			});
		}
	}
});
