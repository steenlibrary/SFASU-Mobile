Ext.define('SFASU.controller.Home.Feed', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			feed: 'feed',
			feedDataview: 'feed dataview',
			feedTitle: 'feed titlebar',
			axe: 'feed [name=slidebutton]',
			feedChild: 'feed panel',
		},
		control: {
			feed: {
				pop: 'showAxe',
				//show: 'showFeed'
				//push: 'hideAxe'
			},
			'feed dataview': {
				itemtap: 'feedAction',
				refresh: 'feedUpdated'
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
	
	feedUpdated: function(dataview, eOpts) {
		//Ext.getStore('Home.Feed').load();
		console.log('feed updated');
		//console.log(this.getFeedDataview());
	},
	
	feedAction: function(list, index, element, record) {
		//console.log('feed item tapped');
		
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
				//Ext.util.openLink(record.get('link'));
			
				this.hideAxe();
				this.getFeed().push({
					xtype: 'panel',
					title: '@' + record.get('postedBy'),
					html: '<img src="' + record.get('image') + '" style="float: left; padding-right: 5px;" />'
						+ '<h3>@' + record.get('postedBy') + '</h3>'
						+ '<h3>' + record.get('title') + '</h3>'
						+ 'Posted: ' + Ext.Date.format(record.get('publishedDate'), 'g:i a l, F j, Y'),
					scrollable: true,
					styleHtmlContent: true
				});
				break;
			default:
				break;
		}
	}
});
