Ext.define('SFASU.controller.NewStudent', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			newStudent: 'newstudent',
			//story: 'co panel',
			axe: 'newstudent [name=slidebutton]'
		},
		control: {
			'newstudent list': {
				itemtap: 'showLink',
			}
		}
	},
	
	showLink: function(list, index, element, record) {
		Ext.util.openLink(record.get('url'));
	}
});
