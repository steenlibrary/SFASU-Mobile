Ext.define('SFASU.controller.Directory.Person.Contact', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			homescreen: 'homescreen',
		},
		control: {
			'directory_person_contact': {
				itemtap: 'contactAction'
			}
		}
	},

	contactAction: function(list, index, element, record) {
		if(record.get('type') == 'Phone') {
			console.log("P");
			Ext.util.callNumber(record.get('data'));
		}
		
		if(record.get('type') == 'E-mail') {
			console.log("E");
			Ext.util.email(record.get('data'));
		}
	}
});
