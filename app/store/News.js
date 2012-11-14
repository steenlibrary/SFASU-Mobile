Ext.define('SFASU.store.News', {
    extend: 'Ext.data.Store',
	
	requires: ['Ext.DateExtras', 'Ext.Date'],

    config: {
	
		model: 'SFASU.model.News',
		
		autoLoad: true,
		
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
	            feature: 'news'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },

		listeners: {
			refresh: function(store, data, eOpts) {
				console.log('news: refresh');
				//console.log(data);
				//Ext.getCmp('news').setBadgeText(data.length);
			},
			
			addrecords: function(store, records, eOpts) {
				console.log('news: add records');
			},
			
			load: function(store, data, eOpts) {
				console.log('news: load');
				
				var feedStore = Ext.getStore('Home.Feed');
				//feedStore.removeAll();
				//console.log('news loaded');

				var items = [];

				Ext.each(data, function(story) {
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
							type: 'news'
						});
						feedStore.sync();
					}
				});
			}
		}
    }
});