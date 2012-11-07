Ext.define('SFASU.controller.Directory.Emergency', {
	extend: 'Ext.app.Controller',

	config: {
		control: {
			'directory_emergency': {
				itemsingletap: 'callNumber',
				itemdoubletap: 'callNumber'
			}
		}
	},
	callNumber: function(list, index, element, record) {
		Ext.util.callNumber(record.get('phone'));
	}
});
