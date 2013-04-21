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
			this.getAxe().show({type: 'fadeIn'});
		}
	},
	
	hideAxe: function() {
		if(this.getAxe()) {
			this.getAxe().hide({type: 'fadeOut'});
		}
	},
	
	onTwitterTap: function(list, idx, el, tweet) {
		var url = 'http://twitter.com/' 
			+ tweet.get('from_user')
			+ '/status/' 
			+ tweet.get('id_str');
		openLink(url);
	},
	
	showTweet: function(list, index, element, tweet) {
		if(!this.getTweet()) {
			this.hideAxe();
			this.getSocial().push({
				xtype: 'panel',
				title: '@' + tweet.get('from_user'),
				scrollable: true,
				styleHtmlContent: true,
				items: [{
					html: '<img src="' + tweet.get('profile_image_url') + '" style="float: left; padding: 5px;" />'
						+ '<h3>@' + tweet.get('from_user') + '</h3>'
						+ '<h3>' + tweet.get('text') + '</h3>'
						+ 'Posted: ' + Ext.Date.format(tweet.get('created_at'), 'g:i a l, F j, Y')
				},{
					xtype: 'button',
					text: 'View Tweet on Twittter',
					
					handler: function() {
						openLink(tweet.get('link'));
					}
				}]
			});
		}
	}
});
