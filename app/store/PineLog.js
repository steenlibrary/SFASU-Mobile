Ext.define('SFASU.store.PineLog', {
    extend: 'Ext.data.Store',

    config: {
        fields: [
			//'title',
			{ name: 'title', type: 'string'},
            //'content',
			{ name: 'content', type: 'string'},
            //'link',
			{ name: 'link', type: 'string'},
			{ name: 'author', type: 'string'},
			{ name: 'thumbnail', type: 'string'},
            //'publishedDate'
			{ name: 'publishedDate', type: 'date', /*dateFormat: 'm/d/Y'*/ },
			//{ name: 'publishedDate', type: 'date', dateFormat: 'l, F d, Y g:i:s A' },
        ],

		idProperty: 'link',
		
		//fields: ['title', 'content', 'link', 'publishedDate'],
        
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
			
			url : serverPath,
			
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