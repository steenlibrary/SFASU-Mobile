Ext.define('SFASU.controller.News', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			news: 'news',
			story: 'news panel',
			axe: 'news [name=slidebutton]'
		},
		control: {
			'news list': {
				itemtap: 'showStory'
			},
			news: {
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
	
	showStory: function(list, index, element, record) {
		if(!this.getStory()) {
			this.hideAxe();
			this.getNews().push({
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
		}
	}
});
