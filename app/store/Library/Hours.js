Ext.define('SFASU.store.Library.Hours', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'Library.Hours',
		model: 'SFASU.model.Library.Hours',
		//fields: ['title', 'content', 'link', 'publishedDate'],
		autoLoad: true,
        sorters: 'publishedDate',

        grouper: {
			sortProperty: 'publishedDate',
            groupFn: function(record) {
                return record.get('publishedDate');
				//return Ext.Date.format(record.get('publishedDate'), 'n/j/Y');
            }
        },

		pageSize: 10,
        proxy: {
            type: 'jsonp',
            //url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q='
			//		+ 'http://library.sfasu.edu/mobile/library_hours_xml.php',
			//url : 'http://library.sfasu.edu/mobile/news_json.php',
			
			url: 'http://library.sfasu.edu/mobile/data/index.php',
			
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