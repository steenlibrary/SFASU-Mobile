Ext.define('SFASU.store.AARC.WalkIn', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'AARC.WalkIn',
		fields: ['id', 'course', 'times', 'room'],
        autoLoad: false,
        sorters: 'course',

        grouper: {
            groupFn: function(record) {
                return record.get('course');
            }
        },

        proxy: {
            type: 'jsonp',
			url : 'http://library.sfasu.edu/mobile/aarc_walkin_json.php',
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});