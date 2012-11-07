Ext.define('SFASU.store.PineLog', {
    extend: 'Ext.data.Store',

    config: {
        model: 'SFASU.model.PineLog',
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
            //url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q='
			//		+ 'http://www.thepinelog.com/se/pine-log-rss-1.1609553',
			url : 'http://library.sfasu.edu/mobile/pinelog_json.php',
			
			reader: {
				type: 'json',
				rootProperty: 'responseData.feed.entries'
			}
        }
    }
});