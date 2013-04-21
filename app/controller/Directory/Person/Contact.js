Ext.define('SFASU.controller.Directory.Person.Contact', {
	extend: 'Ext.app.Controller',

	config: {
		control: {
			'directory_person_contact': {
				itemtap: 'contactAction'
			}
		}
	},

	contactAction: function(list, index, element, record) {
		if(record.get('type') == 'Phone') {
			callNumber(record.get('data'));
		}
		
		if(record.get('type') == 'E-mail') {
			email(record.get('data'));
		}
	}
});
