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
            //url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q='
			//		+ 'http://sfajacks.cstv.com/headline-rss.xml',
			url : 'http://library.sfasu.edu/mobile/athletics_news_json.php',
			
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
					  	console.log('img:', img.width + 'x' + img.height);
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
					/*
					var image = story.get('image');
					var style = {
						'background-image':'url("'+image+'")',
						'background-repeat':'no-repeat',
						'background-position':'center center',
						'background-size': '100%',
						'color': '#fff'
					};
					items.push({
						xtype: 'panel',
						style: style,
						items: [{
							xtype: 'panel',
							cls: 'homeCaption',
							html: Ext.is.Tablet ? '<h1>' + story.get('title') + '</h1>' : story.get('title')
						}]
					});
					*/
				});
				//Ext.getCmp('athletics_carousel').setItems(items);
				//Ext.getCmp('athletics_carousel').setActiveItem(0);
			}
		}
    }
});