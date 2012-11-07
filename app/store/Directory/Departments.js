Ext.define('SFASU.store.Directory.Departments', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'Directory.Departments',
		model: 'SFASU.model.Directory.Departments',
        //autoLoad: true,
        sorters: 'department',

        grouper: {
            groupFn: function(record) {
                return record.get('department')[0];
            }
        },

        proxy: {
            type: 'jsonp',
			url : 'http://library.sfasu.edu/mobile/departments_json.php',
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});