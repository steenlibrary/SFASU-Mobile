Ext.define('SFASU.store.AARC.Groups', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'AARC.Groups',
		//model: 'SFASU.model.Directory.Departments',
		fields: ['course', 'section', 'professor', 'leader', 'times', 'room'],
        autoLoad: false,
        sorters: 'course',

        grouper: {
            groupFn: function(record) {
                return record.get('course');
            }
        },

		//pageSize: 10,
        proxy: {
            type: 'jsonp',
			url : 'http://library.sfasu.edu/mobile/aarc_sigroups_json.php',
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});