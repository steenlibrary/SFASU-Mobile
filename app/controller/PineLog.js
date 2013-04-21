Ext.define('SFASU.controller.PineLog', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			pinelog: 'pinelog',
			story: 'pinelog panel',
			axe: 'pinelog [name=slidebutton]'
		},
		control: {
			'pinelog': {
				show: 'showPineLog',
				pop: 'showAxe'
			},
			'pinelog list': {
				itemtap: 'showStory'
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
	
	showPineLog: function() {
		Ext.getStore('PineLog').load();
	},

	showStory: function(list, index, element, record) {
		if(!this.getStory()) {
			this.hideAxe();
			this.getPinelog().push({
				xtype: 'panel',
				title: record.get('title'),
				scrollable: true,
				styleHtmlContent: true,
				
				items: [{
					xtype: 'panel',
					html: '<h3>' + record.get('title') + '</h3>'
					 	+ record.get('author') + '<br/>'
						+ (record.get('thumbnail') ? '<img style="float: right;" src="' + record.get('thumbnail') + '" />' : '' )
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
