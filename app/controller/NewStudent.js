Ext.define('SFASU.controller.NewStudent', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			newStudent: 'newstudent'
		},
		control: {
			'newstudent list': {
				itemtap: 'showLink'
			}
		}
	},
	
	showLink: function(list, index, element, record) {
		openLink(record.get('url'));
	}
});
