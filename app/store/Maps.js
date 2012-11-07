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
			
        //autoLoad: true,
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

		pageSize: 10,
        proxy: {
            type: 'jsonp',
			url : 'http://library.sfasu.edu/mobile/maps_json.php',
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
	    }
    }
});