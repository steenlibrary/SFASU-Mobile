Ext.define('SFASU.store.Maps', {
    extend: 'Ext.data.Store',

    config: {
		fields: [
			'id', 
			'name',
			'lat',
			'lon',
			'hall',
			'computer',
			'athletic'
		],
		
		pageSize: 10,
		
		sorters: [
			{
				property: 'name',
				direction: 'ASC'
			}
		],

        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },

        proxy: {
            type: 'jsonp',

			url: serverPath,
			
			extraParams: {
	            feature: 'maps'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
	    }
    }
});