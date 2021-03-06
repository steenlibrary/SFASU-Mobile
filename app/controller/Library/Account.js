Ext.define('SFASU.controller.Library.Account', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			account: 'library_account'
		},
		control: {
			account: {
				itemtap: 'showLink'
			}
		}
	},
	
	showLink: function(list, index, element, record) {
		openLink(record.get('url'));
	}
});
