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
				itemtap: 'showStory',
				show: 'hideBadge'
				
				//disclose: 'showStory',
			},
			news: {
				pop: 'showAxe',
				//push: 'hideAxe'
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
	
	hideBadge: function() {
		//Ext.getCmp('news').setBadgeText(false);
	},

	showStory: function(list, index, element, record) {
		console.log('showStory');
		if(!this.getStory()) {
			this.hideAxe();
			this.getNews().push({
				xtype: 'panel',
				title: record.get('title'),
				html: '<h3>' + record.get('title') + '</h3>'
				 	//+ record.get('publishedDate') + '<br/>'
					+ Ext.Date.format(record.get('publishedDate'), 'l, F j, Y') 
					+ '<br/><br/>'
					+ '<img style="float: right;" src="' + record.get('image') + '" width="50%"/>'
					+ record.get('content'),
				scrollable: true,
				styleHtmlContent: true
			});
		}
	}
});
