Ext.define('SFASU.controller.Directory.General', {
	extend: 'Ext.app.Controller',

	config: {
		control: {
			'directory_general': {
				itemsingletap: 'callNumber',
				itemdoubletap: 'callNumber'
			}
		}
	},
	callNumber: function(list, index, element, record) {
		Ext.util.callNumber(record.get('phone'));
	}
});
