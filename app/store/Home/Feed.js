Ext.define('SFASU.store.Home.Feed', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'Home.Feed',
		
		fields: [
			'id',
			'title', 
			'content',
			'image',
			'imageOrientation',
			'link', 
			//'publishedDate',
			'postedBy',
			{ name: 'publishedDate', type: 'date' },
			//{ name: 'publishedDate', type: Ext.data.Types.DATE },
			'type'
		],
		
		idProperty: 'link',
		
		grouper: {
            sortProperty: 'publishedDate',
			direction: 'DESC',
            groupFn: function(record) {
            	return record.get('publishedDate');
            }
        },
		
		sorters: [
        	{
            	property: 'publishedDate',
            	direction: 'DESC'
            },
		],
		
        autoLoad: false,
        sorters: 'publishedDate',
		pageSize: 10,

        proxy: {
	        type: 'localstorage',
	        id  : 'sfasu-HomeFeed',
			clearOnPageLoad: false
	    }
    }
});