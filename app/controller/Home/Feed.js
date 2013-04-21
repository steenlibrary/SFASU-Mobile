Ext.define('SFASU.controller.Home.Feed', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			feed: 'feed',
			feedDataview: 'feed dataview',
			whatsNew: 'feed panel whatsnew',
			feedTitle: 'feed titlebar',
			axe: 'feed [name=slidebutton]',
			feedChild: 'feed panel'
		},
		control: {
			
			'viewport': {
				orientationchange: 'onOrientationChange'
			},
			
			feed: {
				pop: 'showAxe'
			},
			
			whatsNew: {
				show: 'onOrientationChange',
				initialize: function() {
					console.log('whats new painted');
					onOrientationChange();
				}
			},
			
			'feed dataview': {
				itemtap: 'feedAction',
				refresh: 'feedUpdated'
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
	
	onOrientationChange: function() {
		console.log('set carousel height');
		this.getWhatsNew().setHeight((Ext.Viewport.getSize().width/(755/312)) + 'px');
		//height: (Ext.Viewport.getSize().height/(755/312)) + 'px',
		
		//alert('orientationchange: ' + orientation);
	},
	
	feedUpdated: function(dataview, eOpts) {
		//Ext.getStore('Home.Feed').load();
		console.log('feed updated');
		//console.log(this.getFeedDataview());
	},
	
	feedAction: function(list, index, element, record) {
		switch(record.get('type')) {
			case 'news':
				//console.log('News');
					this.hideAxe();
					this.getFeed().push({
						xtype: 'panel',
						title: record.get('title'),
						scrollable: true,
						styleHtmlContent: true,
						items: [{
							html: '<h3>' + record.get('title') + '</h3>'
								+ Ext.Date.format(record.get('publishedDate'), 'l, F j, Y') 
								+ '<br/><br/>'
								+ '<img style="float: right;" src="' + record.get('image') + '" width="50%"/>'
								+ record.get('content') + '<br/>'
						},{
							xtype: 'button',
							text: 'View Full Article',
					
							handler: function() {
								openLink(record.get('link'));
							}
						}]
					});
				break;
			case 'athletics':
				//console.log('Athletics');
				this.hideAxe();
				this.getFeed().push({
					xtype: 'panel',
					title: record.get('title'),
					scrollable: true,
					styleHtmlContent: true,
					items: [{
						html: '<h3>' + record.get('title') + '</h3>'
							+ Ext.Date.format(record.get('publishedDate'), 'l, F j, Y') 
							+ '<br/><br/>'
							+ '<img style="float: right;" src="' + record.get('image') + '" width="50%"/>'
							+ record.get('content') + '<br/>'
					},{
						xtype: 'button',
						text: 'View Full Article',
					
						handler: function() {
							openLink(record.get('link'));
						}
					}]
				});
				break;
			case 'video':
				openLink(record.get('link'));
				break;
			case 'twitter':
				//console.log('Twitter');
				this.hideAxe();
				this.getFeed().push({
					xtype: 'panel',
					title: '@' + record.get('postedBy'),
					scrollable: true,
					styleHtmlContent: true,
					items: [{
						html: '<img src="' + record.get('image') + '" style="float: left; padding-right: 5px;" />'
							+ '<h3>@' + record.get('postedBy') + '</h3>'
							+ '<h3>' + record.get('title') + '</h3>'
							+ 'Posted: ' + Ext.Date.format(record.get('publishedDate'), 'g:i a l, F j, Y')
					},{
						xtype: 'button',
						text: 'View Tweet on Twittter',
					
						handler: function() {
							openLink(record.get('link'));
						}
					}]
				});
				break;
			default:
				break;
		}
	}
});
