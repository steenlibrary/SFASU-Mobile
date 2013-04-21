Ext.define('SFASU.store.WhatsNew', {
    extend: 'Ext.data.Store',

    config: {
		fields: [
			'image', 
			'thumbnail', 
			'link', 
			'title',
			'caption'
		],
			
        autoLoad: true,

        proxy: {
            type: 'jsonp',
			
			url: serverPath,
			
			extraParams: {
	            feature: 'whatsnew'
	        },
	
			reader: {
				type: 'json',
				rootProperty: ''
			}
        },
		
		listeners: {
			load: function(store, data, eOpts) {
				var items = [];

				Ext.each(data, function(picture) {
					if (!picture.get('image')) {
						return;
					}
					
					var style = {
						'background-image':'url("'+picture.get('image')+'")',
						'background-repeat': 'no-repeat',
						'background-position': 'center center',
						'background-size': '100% 100%'
					};
					
					items.push({
						xtype: 'panel',
						style: style,
						//html: '<img src="' + picture.get('image') + '" width="100%"/>'
						listeners: {
						    tap: {
						        fn: function() {
									if(picture.get('link') != '') {
										openLink(picture.get('link'));
									}
								},
						        element: 'element'
						    }
						}
					});
				});
				Ext.getCmp('whatsnew_carousel').setItems(items);
				Ext.getCmp('whatsnew_carousel').setActiveItem(0);
			}
		}
    }
});