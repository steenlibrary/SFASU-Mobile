Ext.define('SFASU.store.Events', {
    extend: 'Ext.data.Store',

    config: {
        model: 'SFASU.model.Events',
        //autoLoad: true,
        //sorters: 'publishedDate',
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
			//url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q='
			//		+ 'http://www.sfasu.edu/xml/333.asp',
			url: 'http://library.sfasu.edu/mobile/events_json.php',
			
			reader: {
				type: 'json',
				rootProperty: 'responseData.feed.entries'
			}
        }
    }
});