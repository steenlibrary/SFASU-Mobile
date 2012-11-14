Ext.define('SFASU.store.Athletics.News', {
    extend: 'Ext.data.Store',

    config: {
		//model: 'SFASU.model.News',
		storeId: 'Athletics.News',
		
		fields: [
            'title',
            'content',
            'link',
            //'publishedDate',
			{ name: 'publishedDate', type: 'date'},
			'image'
        ],

        autoLoad: true,
        //sorters: 'publishedDate',

		idProperty: 'link',
		
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
	            feature: 'athletics_news'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },
		listeners: {
			load: function(store, data, eOpts) {
				var feedStore = Ext.getStore('Home.Feed');
				console.log('athletics news loaded');
				var items = [];
				var limit = 5;
				Ext.each(data, function(story, index) {
					if (index >= limit) return;
					
					if (!story.get('image')) {
						return;
					}
					
					var img = new Image();
					img.src = story.get('image');
					
					img.onload = function() {
						var imageOrientation = (img.width > img.height) ? 'landscape' : 'portrait';
						
						feedStore.add({ 
							title: story.get('title'),
							image: story.get('image'),
							imageOrientation: imageOrientation,
							content: story.get('content'),
							publishedDate: story.get('publishedDate'),
							type: 'athletics'
						});
					
						feedStore.sync();
					}
				});
			}
		}
    }
});