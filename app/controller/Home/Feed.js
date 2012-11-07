Ext.define('SFASU.controller.Home.Feed', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			//homescreen: 'homescreen',
			//screen01: 'screen01',
			//screen02: 'screen02',
			//screen03: 'screen03',
			//homescreenToolbar: 'homescreen toolbar',
			//homeLogo: 'homescreen #homeLogo'
			feed: 'feed',
			feedTitle: 'feed titlebar',
			axe: 'feed [name=slidebutton]',
			feedChild: 'feed panel',
		},
		control: {
			feed: {
				pop: 'showAxe',
				show: 'showFeed'
				//push: 'hideAxe'
			},
			'feed dataview': {
				itemtap: 'feedAction'
			}
		}
	},
	
	showFeed: function() {
		//Ext.getStore('Home.Feed').load();
	},
	
	feedAction: function(list, index, element, record) {
		console.log('feed item tapped');
		
		switch(record.get('type')) {
			case 'news':
				console.log('News');
					this.hideAxe();
					this.getFeed().push({
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
				break;
			case 'athletics':
				console.log('Athletics');
				this.hideAxe();
				this.getFeed().push({
					xtype: 'panel',
					title: record.get('title'),
					html: '<h3>' + record.get('title') + '</h3>' 
						+ '<img style="float: right;" src="' + record.get('image') + '" width="50%"/>'
						+ record.get('content'),
					scrollable: true,
					styleHtmlContent: true
				});
				break;
			case 'video':
				console.log('Video');
				Ext.util.openLink(record.get('link'));
				
				break;
			case 'twitter':
				console.log('Twitter');
				Ext.util.openLink(record.get('link'));

				break;
			default:
				break;
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
});
