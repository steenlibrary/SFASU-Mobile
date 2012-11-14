Ext.define('SFASU.controller.Directory.Person.Map', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homescreen: 'homescreen',
		},
		control: {
			'directory_person_map': {
				tap: 'buttonAction'
			}
		}
	},

	buttonAction: function(button, event, eOpts) {
		//console.log('favorite');
	}
});
