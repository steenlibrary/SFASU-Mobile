Ext.define('SFASU.store.Library.Hours', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'Library.Hours',
		model: 'SFASU.model.Library.Hours',
		//fields: ['title', 'content', 'link', 'publishedDate'],
		autoLoad: true,
        sorters: 'date',

        grouper: {
			sortProperty: 'date',
            groupFn: function(record) {
				return Ext.Date.format(record.get('date'), 'l, F j, Y');
            }
        },

		pageSize: 10,
        proxy: {
            type: 'jsonp',
			
			url: serverPath,
			
			extraParams: {
	            feature: 'library_hours'
	        },
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});