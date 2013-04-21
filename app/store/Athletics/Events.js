Ext.define('SFASU.store.Athletics.Events', {
    extend: 'Ext.data.Store',

    config: {
		storeId: 'Athletics.Events',
		fields: [
            'title',
            'content',
            'link',
            { name: 'publishedDate', type: 'date'}
        ],
        //autoLoad: true,
        sorters: 'publishedDate',

        grouper: {
			sortProperty: 'publishedDate',
			direction: 'DESC',
            groupFn: function(record) {
				return Ext.Date.format(record.get('publishedDate'), 'l, F j, Y');
            }
        },

		pageSize: 10,
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q='
					+ 'http://sfajacks.cstv.com/event-toolbar-rss.xml',
			//url : 'http://library.sfasu.edu/mobile/news_json.php',
			
			reader: {
				type: 'json',
				rootProperty: 'responseData.feed.entries'
			}
        }
    }
});