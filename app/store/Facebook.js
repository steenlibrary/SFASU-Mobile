Ext.define('SFASU.store.Facebook', {
    extend: 'Ext.data.Store',
	
	requires: ['Ext.DateExtras', 'Ext.Date'],

    config: {
		//model: 'SFASU.model.News',
		fields: ['id', 'title', 'published', 'content', 'likes'],
        autoLoad: false,
        //sorters: 'created_at',

        grouper: {
			//sortProperty: 'created_at',
            groupFn: function(record) {
                return record.get('published');
				//return Ext.Date.format(record.get('publishedDate'), 'm/d/Y');
            }
        },

		pageSize: 10,
        proxy: {
            type: 'scripttag',

			url : 'https://www.facebook.com/feeds/page.php?id=32604451786&format=json',
			
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },

		listeners: {
			load: function(store, data, eOpts) {

				console.log('facebook loaded');
				
				var items = [];

				Ext.each(data, function(story, index) {
					if(index >= 5) return;
					console.log('facebook: ');
					console.log(story);

					var image = '';
					console.log();
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
						//id: story.get('id'),
						
						items:[{
							xtype: 'panel',
							cls: 'homeCaption',
							html: story.get('title')
						}],
						listeners: {
						    tap: {
						        fn: function() {
									console.log('social panel tap');
									//console.log(this.config.get('id'));
								},
						        element: 'element'
						    }
						}
					});
				});
				console.log(items);
				Ext.getCmp('social_carousel').setItems(items);
				Ext.getCmp('social_carousel').setActiveItem(0);
				
			}
		}
    }
});