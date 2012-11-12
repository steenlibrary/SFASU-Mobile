Ext.define('SFASU.store.AARC.Groups', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'AARC.Groups',

		fields: ['course', 'section', 'professor', 'leader', 'times', 'room'],

        autoLoad: false,

		//pageSize: 10,

        grouper: {
            groupFn: function(record) {
                return record.get('course');
            }
        },
		
        proxy: {
            type: 'jsonp',

			url: 'http://library.sfasu.edu/mobile/data/index.php',
			
			extraParams: {
	            feature: 'aarc_sigroups'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});