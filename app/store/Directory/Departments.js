Ext.define('SFASU.store.Directory.Departments', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'Directory.Departments',
		model: 'SFASU.model.Directory.Departments',
		
        sorters: 'department',

        grouper: {
            groupFn: function(record) {
                return record.get('department')[0];
            }
        },

        proxy: {
            type: 'jsonp',
			
			url: serverPath,
			
			extraParams: {
	            feature: 'departments'
	        },
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});