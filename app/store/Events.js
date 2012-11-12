Ext.define('SFASU.store.Events', {
    extend: 'Ext.data.Store',

    config: {
        model: 'SFASU.model.Events',

		pageSize: 10,

		grouper: {
			sortProperty: 'date',
			direction: 'ASC',
            groupFn: function(record) {
				return Ext.Date.format(record.get('date'), 'l, F j, Y');
            }
        },

        proxy: {
            type: 'jsonp',
			
			url : serverPath,
			
			extraParams: {
	            feature: 'events'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});