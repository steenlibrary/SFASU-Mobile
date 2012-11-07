Ext.define('SFASU.controller.Library.Account', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			account: 'library_account',
			//story: 'co panel',
			axe: 'library_main [name=slidebutton]'
		},
		control: {
			account: {
				itemtap: 'showLink',
				//show: 'hideBadge'
				
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
	
	showLink: function(list, index, element, record) {
		console.log('showLink: ' + record.get('url'));
		Ext.util.openLink(record.get('url'));
	}
});
