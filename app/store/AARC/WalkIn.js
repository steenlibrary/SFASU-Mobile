Ext.define('SFASU.store.AARC.WalkIn', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'AARC.WalkIn',
		
		fields: ['id', 'course', 'times', 'room'],
		
        autoLoad: false,

        grouper: {
            groupFn: function(record) {
                return record.get('course');
            }
        },

        proxy: {
            type: 'jsonp',
			
			url: serverPath,
			
			extraParams: {
	            feature: 'aarc_walkin'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});