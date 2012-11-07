Ext.define('SFASU.store.News', {
    extend: 'Ext.data.Store',
	
	requires: ['Ext.DateExtras', 'Ext.Date'],

    config: {
		model: 'SFASU.model.News',
        autoLoad: true,
        //sorters: 'publishedDate',
		
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
			//		+ 'http://www.sfasu.edu/xml/1742.xml',
			url : 'http://library.sfasu.edu/mobile/news_json.php',
			
			reader: {
				type: 'json',
				rootProperty: 'responseData.feed.entries'
			}
        },

		listeners: {
			refresh: function(store, data, eOpts) {
				//console.log(data);
				//Ext.getCmp('news').setBadgeText(data.length);
			},
			
			load: function(store, data, eOpts) {
				var feedStore = Ext.getStore('Home.Feed');
				//feedStore.removeAll();
				console.log('news loaded');
				console.log(Ext.os.is.Desktop);
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
					
					
					/*
					
					var image = story.get('image'),
						width = story.get('width'),
						height = story.get('height');

					console.log('width: ' + width);
					console.log('height: ' + height);
					
					if (width > height) {
						var background_size = '100%';
					} else {
						var background_size = '150%';
					}
					
					var style = {
						'background-image':'url("'+image+'")',
						'background-repeat':'no-repeat',
						'background-position':'center center',
						'background-size': background_size,
						'color': '#fff'
					};
					
					items.push({
						xtype: 'panel',
						style: style,
						id: story.get('id'),
						
						items:[{
							xtype: 'panel',
							cls: 'homeCaption',
							//html: story.get('title'),
							story: story,
							html: Ext.is.Tablet ? '<h1>' + story.get('title') + '</h1>' : story.get('title')
						}],
						
						listeners: {
						    tap: {
						        fn: function() {
									console.log('news panel tap');
									//console.log(this.config.get('id'));
									//Ext.getCmp('slidemenu').container.setActiveItem(Ext.getCmp('slidemenu')._cache[1]);
									//Ext.getCmp('slidemenu').list.select(1);
									console.log(Ext.getCmp('slidemenu').container.getActiveItem().items.items[0]);
									Ext.getCmp('slidemenu').container.getActiveItem().items.items[0].push({
										xtype: 'panel',
										title: story.get('title'),
										html: '<h3>' + story.get('title') + '</h3>' 
											+ '<img style="float: right;" src="' + story.get('image') + '" width="50%"/>'
											+ story.get('content'),
										scrollable: true,
										styleHtmlContent: true
									});
								},
						        element: 'element'
						    }
						}
					});
					*/
				});
				//console.log(items);
				//Ext.getCmp('news_carousel').setItems(items);
				//Ext.getCmp('news_carousel').setActiveItem(0);
			}
		}
    }
});