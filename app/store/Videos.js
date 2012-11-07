Ext.define('SFASU.store.Videos', {
    extend: 'Ext.data.Store',

    config: {
		fields: [
			'id', 
			'title',
			{ name: 'publishedDate', type: 'date'},
			'duration',
			'thumbnail'
		],
			
        autoLoad: true,
        //sorters: 'pubDate',
		/*sorters: [
			{
				property: 'pubDate',
				direction: 'ASC'
			}
		],
		*/

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
            //url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q='
			//		+ 'http://www.sfasu.edu/xml/1742.xml',
			url : 'http://library.sfasu.edu/mobile/videos_json.php',
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },
		listeners: {
			load: function(store, data, eOpts) {
				var feedStore = Ext.getStore('Home.Feed');
				console.log('video loaded');
				var items = [];
				var limit = 5;

				Ext.each(data, function(video, index) {
					
					
					if((index >= limit) || !video.get('thumbnail')) return;
					
					var url = 'http://www.youtube.com/watch?v=' 
						+ video.get('id') 
						+ '&feature=player_embedded&autoplay=true';
						
					var img = new Image();
					img.src = video.get('thumbnail');
					
					img.onload = function() {
						var imageOrientation = (img.width > img.height) ? 'landscape' : 'portrait';
						
						feedStore.add({ 
							title: video.get('title'),
							image: video.get('thumbnail'),
							imageOrientation: imageOrientation,
							link: url,
							publishedDate: video.get('publishedDate'),
							type: 'video'
						});
					
						feedStore.sync();
					}
					
					/*
					var image = video.get('thumbnail');
					var style = {
						'background-image':'url("'+image+'")',
						'background-repeat':'no-repeat',
						'background-position':'center center',
						'background-height': '100%',
						'color': '#fff'
					};
					items.push({
						xtype: 'panel',
						style: style,
						items: [{
							xtype: 'panel',
							cls: 'homeCaption',
							html: video.get('title')
						}]
					});
					*/
				});
				//Ext.getCmp('videos_carousel').setItems(items);
				//Ext.getCmp('videos_carousel').setActiveItem(0);
			}
		}
    }
});