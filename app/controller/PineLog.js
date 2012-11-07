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
				itemtap: 'showStory',
				//disclose: 'showStory',
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
	
	showPineLog: function() {
		Ext.getStore('PineLog').load();
	},

	showStory: function(list, index, element, record) {
		if(!this.getStory()) {
			this.hideAxe();
			this.getPinelog().push({
				xtype: 'panel',
				title: record.get('title'),
				html: '<h3>' + record.get('title') + '</h3>'
				 	+ 'by ' + record.get('author')
					+ '<img style="float: right;" src="' + record.get('thumbnail') + '" />'
					+ record.get('content'),
				scrollable: true,
				styleHtmlContent: true
			});
		}
	}
});
