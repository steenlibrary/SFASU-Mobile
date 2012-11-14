Ext.define('SFASU.store.PineLog', {
    extend: 'Ext.data.Store',

    config: {
        fields: [
			{ name: 'title', type: 'string'},
			{ name: 'content', type: 'string'},
			{ name: 'link', type: 'string'},
			{ name: 'author', type: 'string'},
			{ name: 'thumbnail', type: 'string'},
			{ name: 'publishedDate', type: 'date'},
        ],

		idProperty: 'link',
        
		autoLoad: false,
        
		//sorters: 'publishedDate',
		
		pageSize: 10,

		grouper: {
			sortProperty: 'publishedDate',
			direction: 'DESC',
            groupFn: function(record) {
				return Ext.Date.format(record.get('publishedDate'), 'l, F j, Y');
            }
        },

        proxy: {
            type: 'jsonp',
			
			url: serverPath,
			
			extraParams: {
	            feature: 'pinelog'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        }
    }
});